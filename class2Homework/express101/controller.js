const fs = require('fs');

const controller = (req, res) => {

    fs.readFile('./page/index.html', (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.write(data)
            res.end()
        }
    })


}

const homecontroller = (req, res) => {


    const title = 'this is home page'
    res.render('page/home', { title })
}

const aboutcontroller = (req, res) => {

    const title = 'this is about page'
    res.render('page/about', { title })
}

module.exports = {
    controller,
    homecontroller,
    aboutcontroller
}

