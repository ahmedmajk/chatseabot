const express = require('express')
const server = express()
const port = 8000

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/views'));

const name = 'Coka'
const logo = ("https://cdn.discordapp.com/attachments/1072656658037223565/1100179530989195365/chatsea.jpg")

const siteVariabls = {
    name: name,
    logo: logo
}

server.get('/', (req, res) => {
    res.render('index', siteVariabls)
})

server.get('/commands', (req, res) => {
    res.render('public/commands', siteVariabls)
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})