import React, { useState, useEffect } from 'react';
import Board from './board';
import StoneBase from './stoneBase';
import Intersect from './intersect'

const io = require('socket.io-client')
const socket = io('ws://127.0.0.1:3000')


const Canvas = () => {
    const [clientBoard, setClientBoard] = useState(false)
    //const [whiteStones, setWhiteStones] = useState(0)
    //const [blackStones, setBlackStones] = useState(0)
    const [color, setColor] = useState(0)
    //const [score, setScore] = useState(0)
    //const [ready, setReady] = useState(false)
    const [toPlay, setToPlay] = useState(false)

    socket.connect()

    useEffect(() =>  {
        socket.on('game ready', board => {
            startGame(board)
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
    })

    const startGame = (board) => {
        setClientBoard(board)
        // Test line
        setColor('black')
        //setReady(true)
        //setScore(0)
        //setWhiteStones(0)
        //setBlackStones(0)
        setToPlay(false)
        console.log('startGame board: ' + board)
        console.log('startGame board.length: ' + board.length)
    }

    const handleOnClick = () => {
        socket.emit('ready')
    }

    if (clientBoard.length >= 9) {
        return (
            <div className="Game">
                <Board board={clientBoard} />
            </div>
        )
    } 

    return (
        <div className="Game">
            <button onClick={handleOnClick}>Ping socket</button>
        </div>
    )
}

export default Canvas;