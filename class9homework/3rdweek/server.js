
const app = require('./app/app')
require('dotenv').config();



const port = process.env.PORT


app.listen(port, () => {
    console.log(`server is listening port ${port}`)
})