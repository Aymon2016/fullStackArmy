const fs = require('fs/promises')
const path = require('path')
const dbPath = path.resolve('db', 'user.json')
const dbPathNotice = path.resolve('db', 'notice.json')
const dbPathProduct = path.resolve('db', 'product.json')
const dbPathMill = path.resolve('db', 'mill.json')

//user
exports.readfile = async () => {
    const data = await fs.readFile(dbPath)
    return JSON.parse(data)
}

exports.writeFile = async (data) => {
    await fs.writeFile(dbPath, JSON.stringify(data))
}

//notice
exports.readfileNotice = async () => {
    const data = await fs.readFile(dbPathNotice)
    return JSON.parse(data)
}

exports.writeFileNotice = async (data) => {
    await fs.writeFile(dbPathNotice, JSON.stringify(data))
}


//Product
exports.readfileProduct = async () => {
    const data = await fs.readFile(dbPathProduct)
    return JSON.parse(data)
}

exports.writeFileProduct = async (data) => {
    await fs.writeFile(dbPathProduct, JSON.stringify(data))
}
// mill

exports.readfileMill = async () => {
    const data = await fs.readFile(dbPathMill)
    return JSON.parse(data)
}

exports.writeFileMill = async (data) => {
    await fs.writeFile(dbPathMill, JSON.stringify(data))
}