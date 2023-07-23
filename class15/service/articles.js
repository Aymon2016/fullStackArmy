
const Article = require('../modal/Article')

const findArticles = async ({
    page = 1,
    limit = 5,
    sortType = 'asc',
    sortBy = 'updatedAt',
    searchTerm = '',
}) => {


    // get article
    const articleInstance = new Article()
    await articleInstance.init()
    let article;

    if (searchTerm) {
        article = await articleInstance.search(searchTerm)
    } else {
        article = await articleInstance.find()
    }

    //  sort article
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

module.exports = {
    findArticles,
    transformArticles
}