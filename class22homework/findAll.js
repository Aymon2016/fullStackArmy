
const articleService = require('../../../../lib/article/index');
const { selfLinkGenerate, totalPage, pagination, hateoasLinkGenerate, generateQueryString } = require('./utilis')
const findAll = async (req, res, next) => {

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const sortType = req.query.sort_type || 'dsc';
    const sortBy = req.query.sort_by || 'updatedAt';
    const search = req.query.search || '';


    try {


        const articles = await articleService.findAll({
            page,
            limit,
            sortType,
            sortBy,
            search,
        });

        const data = await selfLinkGenerate(articles)

        // pagination
        const totalItems = await articleService.count({ search });
        const totalPages = totalPage(totalItems, limit)

        const paginations = pagination(page, limit, totalItems, totalPages)

        // HATEOAS Links
        const links = hateoasLinkGenerate(req, paginations, page)

        res.status(200).json({
            data,
            paginations,
            links,
        });


    } catch (e) {
        next(e)
    }
}


module.exports = findAll