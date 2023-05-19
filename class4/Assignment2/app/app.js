const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const globalErrorHandler = require('../middlewares/errorhandler')
const userRouter = require('../routes/userRouter/index')

const app = express()


app.use([morgan('dev'), cors(), express.json()]);

app.use('/api/v1/users', userRouter)

app.all("*", (req, res) => {
    res.status(404).json({ error: "Resource not found" });
});



/*=============================================
=            error handler            =
=============================================*/

app.use(globalErrorHandler)

/*=====  End of error handler  ======*/




export default app;