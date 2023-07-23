const databaseConnection = require('../db')
const Article = require('../modal/Article')

const findArticles = async ({
    page = 1,
    limit = 5,
    sortType = 'asc',
    sortBy = 'updatedAt',
    searchTerm = '',
}) => {


    // get article
    databaseConnection.db.articles
    //article class create
    const articleInstance = new Article(databaseConnection.db.articles)

    let article;

    if (searchTerm) {
        article = await articleInstance.search(searchTerm)
    } else {
        article = await articleInstance.find()
    }

    //  sort article
    article = [...article]
    article = await articleInstance.sort(article, sortType, sortBy)


    // paginaton
    const {
        result,
        totalItems,
        totalPage,
        hasNext,
        hasPrev
    } = await articleInstance.pagination(article, page, limit)
};

const transformArticles = ({ articles = [] }) => {
    return articles.map((article) => {
        const transformed = { ...article };
        transformed.author = {
            id: transformed.authorId,
            // TODO: find author name - authorService
        };
        transformed.link = `/articles/${transformed.id}`;
        delete transformed.body;
        delete transformed.authorId;

        return transformed;
    });
};

const createArticle = async ({ title, body, authorId, cover = '', status = 'draft' }) => {
    const articleInstance = new Article(databaseConnection.db.articles)
    const article = await articleInstance.create({ title, body, authorId, cover, status }, databaseConnection)

    return article
}

module.exports = {
    findArticles,
    transformArticles,
    createArticle,
}