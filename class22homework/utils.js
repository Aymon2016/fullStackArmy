const selfLinkGenerate = (articles) => {
    const data = articles.map((article) => ({
        ...article._doc,
        link: `/articles/${article.id}`,
    }));
    return data;
}

const totalPage = (totalItems, limit) => {
    return Math.ceil(totalItems / limit)
}

// pagination make
const pagination = (page, limit, totalItems, totalPage) => {

    const pagination = {
        page,
        limit,
        totalItems,
        totalPage,
    };

    if (page < totalPage) {
        pagination.next = page + 1;
    }

    if (page > 1) {
        pagination.prev = page - 1;
    }

    return pagination;
}


const generateQueryString = (query) => {
    return Object.keys(query)
        .map(
            (key) => encodeURIComponent(key) + '=' + encodeURIComponent(query[key])
        )
        .join('&');
};


//hateoas link make

const hateoasLinkGenerate = (req, pagination, page) => {
    const links = {
        self: req.url,
    };

    if (pagination.next) {
        const query = generateQueryString({ ...req.query, page: page + 1 });
        links.next = `${req.path}?${query}`;
    }
    if (pagination.prev) {
        const query = generateQueryString({ ...req.query, page: page - 1 });
        links.prev = `${req.path}?${query}`;
    }

    return links;
}

module.exports = {
    hateoasLinkGenerate,
    generateQueryString,
    pagination,
    totalPage,
    selfLinkGenerate,
}
