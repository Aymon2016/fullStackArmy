const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./swager.yaml');
const databaseConnection = require('./db')
const { findArticles, transformArticles, createArticle } = require('./service/articles')

const app = express();
app.use(express.json());
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use((req, res, next) => {
    req.user = {
        id: 999,
        name: 'Aymon'
    }
    next();
})

app.get('/api/v1/articles', async (req, res) => {
    //1.query params nite hobe
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const sortType = req.query.sort_type || 'asc';
    const sortBy = req.query.sort_by || 'updatedAt';
    const searchTerm = req.query.searchTerm || '';


    //2.service  all completed
    const {
        result,
        totalItems,
        totalPage,
        hasNext,
        hasPrev } = await findArticles({
            page,
            limit,
            sortType,
            sortBy,
            searchTerm,
        });

    //3.response genarated 

    const transformArticle = transformArticles(result)

    const response = {
        data: transformArticle,
        pagination: {
            page,
            limit,
            totalPage,
            totalItems,
        },
        links: {
            self: req.url,
        },
    };

    if (hasPrev) {
        response.pagination.prev = page - 1;
        response.links.prev = `/articles?page=${page - 1}&limit=${limit}`;
    }

    if (hasNext) {
        response.pagination.next = page + 1;
        response.links.next = `/articles?page=${page + 1}&limit=${limit}`;
    }

    return res.status(200).json({
        message: "Data retrive Successfull",
        data: response
    })
});

app.post('/api/v1/articles', async (req, res) => {

    // get req paramter

    const { title, body, cover, status } = req.body;

    // process 

    const article = createArticle({ title, body, cover, status, authorId: req.user.id })

    const responese = {
        code: 201,
        message: 'article created successfull',
        data: article,
        links: {
            self: `${req.url}/${article.id}`,
            author: `${req.url}/${article.id}/author`,
            comment: `${req.url}/${article.id}/comments`
        }

    }

    return res.status(201).json(responese)

});

app.get('/health', (_req, res) => {
    res.status(200).json({
        health: 'OK',
    });
});

(async () => {
    await databaseConnection.connect()
    console.log('Database connected')
    app.listen(3000, () => {
        console.log('Server is listening on port 3000');
    })

})()

