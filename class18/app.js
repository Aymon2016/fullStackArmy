const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./swager.yaml');
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use((req, res, next) => {
    req.user = {
        id: 999,
        name: 'Aymon'
    }
    next();
})


app.get('/health', (_req, res) => {
    res.status(200).json({
        health: 'OK',
    });
});

let connectionUrl = process.env.DB_CONNECTION;
connectionUrl = connectionUrl.replace('<username>', process.env.DB_USER)
connectionUrl = connectionUrl.replace('<password>', process.env.DB_PASSWORD)
connectionUrl = `${connectionUrl}/${process.env.DB_NAME}?${DB_QUERY}`

mongoose.connect(connectionUrl, {}.then(() => {
    app.listen(3000, async () => {
        console.log('Server is listening on port 3000');
    })

})).catch((e) => {
    console.log(e)
})