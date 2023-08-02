require('dotenv')
const http = require('http')
const app = require('./app')
const { connecDB } = require('../db/index')


const server = http.createServer(app)

const port = process.env.PORT || 3000;
const main = async () => {
    try {
        await connecDB()

        server.listen(port, async () => {
            console.log(`Server is listening on port ${port}`);
        })

    } catch (e) {
        console.log('Database Error')
        console.log(e)
    }

}
main()
