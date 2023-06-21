
const validator = require('validator')

const validate = mill => {

    let error = {}

    if (!mill.date) {
        error.date = 'Please Provide mill Date'
    }
    if (!mill.quantity) {
        error.quantity = 'Please Provide quantity'
    }
    if (!mill.userID) {
        error.userID = 'Please Provide userID'
    }
    if (!mill.authorId) {
        error.authorId = 'Please Provide authorId'
    }


    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate