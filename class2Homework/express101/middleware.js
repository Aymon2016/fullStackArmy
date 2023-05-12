const middleware = (req, res, next) => {

    console.log('Iam a middleware')
    next()
}

module.exports = middleware