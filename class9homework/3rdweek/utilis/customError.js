class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const createError = (message, statusCode) => {
    throw new CustomError(message, statusCode);
};

module.exports = { CustomError, createError };