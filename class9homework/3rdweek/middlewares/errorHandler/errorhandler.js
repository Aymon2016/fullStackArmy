const CustomError = require("../../utilis/customError");


const globalErrorHandler = (error, req, res, next) => {

    console.log('error', error)
    if (error.status) {
        return res.status(error.status).send(error.message)

    }

    res.status(500).send('Something Went Wrong')

    // if (err instanceof CustomError) {
    //     res.status(err.statusCode).json({ error: err.message });
    // } else {
    //     // Handle other types of errors or fallback to a generic error response
    //     res
    //         .status(500)
    //         .json({ error: "Internal Server Error", message: err.message });
    // }
}

module.exports = { globalErrorHandler }