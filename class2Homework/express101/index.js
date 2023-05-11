const express = require('express')
const fs = require('fs');

const app = express()


app.get('/', (req, res) => {

    fs.readFile('./page/index.html', (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.write(data)
            res.end()
        }
    })

})

const port = 8080;


app.listen(port, () => {
    console.log(`server is listening port ${port}`)
})