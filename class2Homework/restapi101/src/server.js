const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const shortid = require('shortid')
const fs = require('fs/promises')
const path = require('path')
const dblocation = path.resolve('src', 'data.json')


const app = express();


app.use(cors());
app.use(morgan());
app.use(express.json());

app.delete('/:id', async (req, res) => {

    const id = req.params.id;

    const data = await fs.readFile(dblocation)
    const players = JSON.parse(data)

    let player = players.find((item) => item.id === id);

    if (!player) {
        return res.status(404).json({ message: 'player not found' })
    }

    const newplayer = players.filter((item) => item.id !== id)

    await fs.writeFile(dblocation, JSON.stringify(newplayer))

    res.status(201).json({ message: "delete player" })
    res.end()

})


app.put('/:id', async (req, res) => {

    const id = req.params.id;

    const data = await fs.readFile(dblocation)
    const players = JSON.parse(data)

    let player = players.find((item) => item.id === id);

    if (!player) {
        player = {
            ...req.body,
            id: shortid.generate(),
        }
        players.push(player)
    } else {
        player.name = req.body.name,
            player.age = req.body.age
    }


    await fs.writeFile(dblocation, JSON.stringify(players))

    res.status(201).json(players)
    res.end()

})

app.patch('/:id', async (req, res) => {

    const id = req.params.id;

    const data = await fs.readFile(dblocation)
    const players = JSON.parse(data)

    const player = players.find((item) => item.id === id);

    if (!player) {
        return res.status(404).json({ message: "player not found" })
    }

    player.name = req.body.name || player.name
    player.age = req.body.age || player.age


    await fs.writeFile(dblocation, JSON.stringify(players))

    res.status(201).json(players)
    res.end()

})


app.get('/:id', async (req, res) => {

    const id = req.params.id;

    const data = await fs.readFile(dblocation)
    const players = JSON.parse(data)

    const player = players.find((item) => item.id === id);

    if (!player) {
        return res.status(404).json({ message: "player not found" })
    }
    res.status(201).json(player)
    res.end()

})

app.post('/', async (req, res) => {

    const player = {
        ...req.body,
        id: shortid.generate(),
    }
    const data = await fs.readFile(dblocation)
    const players = JSON.parse(data)

    players.push(player)

    await fs.writeFile(dblocation, JSON.stringify(players))
    res.status(201).json(player);
    res.end()
})

app.get('/', async (req, res) => {

    const data = await fs.readFile(dblocation)
    const players = JSON.parse(data)
    res.status(201).json(players)
    res.end()

})

app.get('/health', (req, res) => {
    res.send('hello helth router');
    res.end()
})
const port = 8080;


app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}`);
    console.log(`localhost:${port}`);
})