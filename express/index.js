const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const port = 3000
const io = require('socket.io')(http)

app.use(express.static(path.resolve(__dirname + '/../build/')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../build/index.html'))
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})