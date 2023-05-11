const express = require('express')
const cors = require('cors');


//import from file folder
const router = require('./router/router');


const app = express()

app.use(cors());
app.use(express.json());


//router use

app.use(router)


const port = 8000;
app.listen(port, () => {
    console.log(`server is running port on ${port}`)
    console.log('nodemon is running')
})