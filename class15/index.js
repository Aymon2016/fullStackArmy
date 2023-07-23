const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./swager.yaml');
const { findArticles, transformArticles } = require('./service/articles')

const app = express();
app.use(express.json());
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));


app.get('/api/v1/articles', async (req, res) => {
    //1.query params nite hobe
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const sortType = req.query.sortType || 'asc';
    const sortBy = req.query.sortBy || 'updatedAt';
    const searchTerm = req.query.searchTerm || '';


    //2.service  all completed
    const {
        result,
        totalItems,
        totalPage,
        hasNext,
        hasPrev } = await findArticles({
            ...req.query,
            page,
            limit,
        });

    //3.response genarated 

    const transformArticles = transformArticles(result)

    const response = {
        data: transformArticles,
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

app.get('/health', (_req, res) => {
    res.status(200).json({
        health: 'OK',
    });
});


app.listen(4000, () => {
    console.log('Server is listening on port 4000');
});