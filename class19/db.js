const mongoose = require('mongoose')


const generateConnectionStirng = () => {

    const connectionUrl = process.env.DB_CONNECTION_URL;
    const name = process.env.DB_NAME
    const query = process.env.DB_URL_QUERY

    return `${connectionUrl}/${name}?${query}`
}

const connect = async () => {
    const url = generateConnectionStirng()
    const options = { autoIndex: false }

    await mongoose.connect(url, options)
    console.log('database connected')
}

module.exports = connect;