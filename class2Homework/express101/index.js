const express = require('express')
const router = require('./router')



const app = express()


app.set('view engine', 'ejs')

app.use(router)

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