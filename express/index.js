const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const path = require('path')
const port = process.env.PORT || 3000
const socketIo = require('socket.io')
const { Board, checkMove } = require('./gameUtils')
const server = http.createServer(app)
const io = socketIo(server)

app.use(cors())
app.use(express.static(path.resolve(__dirname + '/../build/')))


io.on('connection', socket => {
    console.log('New client connected')

    // TODO
    // Add check for two players, then send 'game ready'
    // Room routing goes here.
    // socket.join('room1')
    // io.to('room1').emit('event') - use this to send messages
    let board = null

    socket.on('made move', ({color, loc}) => {
        switch  (color) {
            case 'white':
                if (board.isValidMove(loc)) {
                    board.updateBoard(loc, color)
                    // Placeholder for testing, will use game rooms instead of two emit events
                    socket.broadcast.emit(`${color} moved`, board.getBoard)
                    socket.emit(`${color} moved`, board.getBoard)
                    console.log('white moved?')
                } else {
                    // Only notify sender of bad move.
                    socket.emit(`invalid move`, { board: board.getBoard })
                }
                break
            case 'black':
                if (board.isValidMove(loc)) {
                    board.updateBoard(loc, color)
                    // Placeholder for testing, will use game rooms instead of two emit events
                    socket.broadcast.emit(`${color} moved`, board.getBoard)
                    socket.emit(`${color} moved`, board.getBoard)
                    console.log('black moved?')
                } else {
                    socket.emit(`${color} invalid move`, { board: board.getBoard })
                }
                break
            default:
                console.log('made move switch broken :(')
        }
    })

    socket.on('ready', (boardSize) => {
        board = new Board(boardSize)
        socket.emit('game ready', board.getBoard)
        console.log('game ready')
    })

    socket.on('disconnect', () => console.log('Client disconnected'))
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../build/index.html'))
})

server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})