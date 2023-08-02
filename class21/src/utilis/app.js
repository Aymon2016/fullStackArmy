const express = require('express');
const applyMfddleware = require('../middleware/index')

const app = express();
applyMfddleware(app)

// app.use('*', (req, res, next) => {
//     const error = new Error('Requested resource not found')
//     error.code = 404
//     error.error = 'Not Found'

//     next(error)
// })

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    })
})



module.exports = app;