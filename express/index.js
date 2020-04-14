const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const port = process.env.PORT || 3000
const socketIo = require('socket.io')

const server = http.createServer(app)
const io = socketIo(server)

app.use(express.static(path.resolve(__dirname + '/../build/')))

io.on('connection', socket => {
    console.log('New client connected')

    socket.on('incoming data', (data) => {
        socket.broadcast.emit('outgoing data', {num: data})
    })

    socket.on('disconnect', () => console.log('Client disconnected'))
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../build/index.html'))
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})