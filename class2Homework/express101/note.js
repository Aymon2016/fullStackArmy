// responsibilites of a middleware
// 1.handle common tasks
// 2.request logs
// 3.filter request
// 5.modify or reshape request
// 6.validate request body
// 7.authenticate or authorize request
// 8.add additional details to request body
// 9.response bad requests
// 10.pass request to next middleware or response handler



// this is a middleware signature
// if everything seems ok controller will call response methods
// if everything seems ok middleware call next

function handler(req, res, next) {

    // read request object
    // porcess request
    // response back the result
}

function middlewareSignature(req, res, next) {


    next()
}

// this is a server setup

const express = require('express')
const router = require('./router')



const app = express()


app.use(router)


const port = 8000;


app.listen(port, () => {
    console.log(`server is listening port ${port}`)
})

//this is a router setup

const express = require('express')
const router = express.Router()
const middleware = require('./middleware');
const controller = require('./controller');

router.get('/', middleware, controller)

module.exports = router

//this is a middleware

const middleware = (req, res, next) => {

    console.log('Iam a middleware')
    next()
}

module.exports = middleware

// this is a controller

const fs = require('fs');
const { setgroups } = require('process')
const { name } = require('ejs')
const { sensitiveHeaders } = require('http2')
const { finished } = require('stream')

const controller = (req, res) => {

    fs.readFile('./page/index.html', (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.write(data)
            res.end()
        }
    })

}

module.exports = controller


// route error to send global error handalling middleware
app.use((req, res, next) => {

    const error = new Error('404 not found')
    error.status = 404;
    next(error)
})

// global error
app.use((error, req, res, next) => {
    console.log('error', error)
    if (error.status) {
        return res.status(error.status).send(error.message)

    }

    res.status(500).send('Something Went Wrong')
})

//templete engine setup 

// 1.npm i ejs
// 2.app.set('view engine', 'ejs')
// 3.akta folder make views name
// 4.
// const title = 'dynmaic ejs title test'
// res.render('home', { title })

/// how to partial add 

// 1.partial akta folder crate korlam
// 2.head file e head file ta raklam
// 3.navitaion file e navigation file ta raklam
// 4.akon about page e and home page e head and navigation ta include kore dilam kaj sesh 
// 5.include korer system

//     ai ta holo partial add korer syntex
//     <%- include('../partials/head.ejs') %>

//     amne dynamic syntex holo

//     <%= title %>


// akta full express project create kore dibe sodo npx express-generator --ejs --view-ejs dile hobe


finished