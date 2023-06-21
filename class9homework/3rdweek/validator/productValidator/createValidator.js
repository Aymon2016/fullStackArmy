const validator = require('validator')

const validate = product => {
    let error = {}


    if (!product.productName) {
        error.productName = 'Please Provide Product Name'
    }
    if (!product.price) {
        error.price = 'Please Provide Product Price'
    }
    if (!product.userID) {
        error.userID = 'Please Provide Your userID'
    }
    if (!product.createAt) {
        error.createAt = 'Please Provide Product CreateAt Time '
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate