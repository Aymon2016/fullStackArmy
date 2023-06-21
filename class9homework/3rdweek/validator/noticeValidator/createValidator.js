const validator = require('validator')

const validate = notice => {
    let error = {}

    if (!notice.date) {
        error.date = 'Please Provide Notice Date'
    }
    if (!notice.title) {
        error.title = 'Please Provide Notice Title'
    }
    if (!notice.noticeBody) {
        error.noticeBody = 'Please Provide Your Notice'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate