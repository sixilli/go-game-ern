import React, { useState, useEffect } from 'react';
import Board from './board';
import PlayerSetup from './setup'
import checkMove from '../utils/gameLogic'

const io = require('socket.io-client')
const socket = io('ws://127.0.0.1:3000')


const Canvas = () => {
    const [clientBoard, setClientBoard] = useState(null)
    //const [whiteStones, setWhiteStones] = useState(0)
    //const [blackStones, setBlackStones] = useState(0)
    const [color, setColor] = useState(0)
    const [boardSize, setBoardSize] = useState(0)
    const [ready, setReady] = useState(false)
    const [toPlay, setToPlay] = useState(false)

    socket.connect()

    useEffect(() =>  {
        socket.on('game ready', board => {
            setClientBoard(board)
            setColor('black')
            setReady(true)
            color === 'black' ? setToPlay(true) : setToPlay(false)
            console.log('sockets.io-client: game ready')
        })

        socket.on('black moved', board => {
            setClientBoard(board)
            color === 'white' ? setToPlay(true) : setToPlay(false)
            console.log('sockets.io-client: black moved')
        })

        socket.on('white moved', board => {
            setClientBoard(board)
            color === 'black' ? setToPlay(true) : setToPlay(false)
            console.log('sockets.io-client: white moved')
        })

        socket.on('invalid move', board => {
            setClientBoard(board)
            console.log('sockets.io-client: invalid move')
        })

        socket.on('color assign', c => {
            setColor(c)
            console.log(`sockets.io-client: color set to ${c}`)
        })
    }, [clientBoard, color])

    const playerSetup = (ctx) => {
        setColor(ctx['color'])
        setBoardSize(ctx['boardSize'])
        if (color === 'black') {
            setToPlay(true)
        }
        socket.emit('ready', ctx['boardSize'])
    }

    const updateBoard = (col, row) => {
        if (toPlay) {
            const validMove = checkMove(col, row, clientBoard)
            if (validMove) {
                let newBoard = [...clientBoard]
                newBoard[row][col] = color === 'black' ? 1 : 2
                setClientBoard(newBoard)
                setToPlay(false)
                socket.emit(`made move`, {color: color, loc: [row, col]})
            } else {
                console.log('invalid move')
            }

        } else {
                console.log('wait ya turn')
        }
        
    }

    if (ready === true) {
        return (
            <div className="Game">
                <Board board={clientBoard} color={color} updateBoard={updateBoard} />
            </div>
        )
    } 

    return (
        <div className="Game">
            <PlayerSetup playerSetup={playerSetup} />
        </div>
    )
}

export default Canvas;