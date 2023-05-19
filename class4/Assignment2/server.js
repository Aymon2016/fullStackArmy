
const app = require('./app/app')



const port = process.env.PORT


app.listen(port, () => {
    console.log(`server is listening port ${port}`)
})