const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express()


app.use([morgan('dev'), cors(), express.json()]);

//router setup
app.use('/api/v1/tickets', require('./router'))

app.get('/health', (req, res) => {
    res.status(200).json({
        message: 'health router is ok'
    })
})

//error handlalling
app.use((req, res, next) => {

    const error = new Error('404 not found')
    error.status = 404;
    next(error)
})

//golabal error
app.use((error, req, res, next) => {
    console.log('error', error)
    if (error.status) {
        return res.status(error.status).send(error.message)

    }

    res.status(500).send('Something Went Wrong')
})

const port = 8000;


app.listen(port, () => {
    console.log(`server is listening port ${port}`)
})