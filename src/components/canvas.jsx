import React, { useState, useEffect } from 'react';
import Board from './board';
import StoneBase from './stoneBase';
import createBoard from '../gameExports';

const io = require('socket.io-client')
const socket = io('ws://127.0.0.1:3000')


const Canvas = ({ size, color }) => {
    const [clientBoard, setClientBoard] = useState(false)
    const [whiteStones, setWhiteStones] = useState(0)
    const [blackStones, setBlackStones] = useState(0)
    const [score, setScore] = useState(0)
    const [ready, setReady] = useState(false)
    const [toPlay, setToPlay] = useState(false)

    socket.connect()

    useEffect(() =>  {
        socket.on('game ready', (board) => {
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
    }, [])

    const startGame = (board) => {
        setClientBoard(board)
        setReady(true)
        setScore(0)
        setWhiteStones(0)
        setBlackStones(0)
        setToPlay(false)
    }

    const handleOnClick = () => {
        socket.emit('ready')
    }

    if (clientBoard.length >= 9) {
        return (
            <div className="Game">
                <Board board={clientBoard} />
                <StoneBase />
                <p>{ size }</p>
                <p>{ color }</p>
            </div>
        )
    } 

    return (
        <div className="Game">
            <button onClick={handleOnClick}>Ping socket</button>
            <p>{ size }</p>
            <p>{ color }</p>
        </div>
    )
}

export default Canvas;