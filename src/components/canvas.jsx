import React, { useState, useEffect } from 'react';
import Board from './board';
import StoneBase from './stoneBase';
import createBoard from '../gameExports';
import useSocket from 'use-socket.io-client'


const Canvas = ({ size, color }) => {
    const [board, setBoard] = useState(false)
    const [whiteStones, setWhiteStones] = useState(0)
    const [blackStones, setBlackStones] = useState(0)
    const [score, setScore] = useState(0)
    const [ready, setReady] = useState(false)
    const [toPlay, setToPlay] = useState(false)

    const [socket] = useSocket('http://127.0.0.1:3000')
    socket.connect()

    useEffect(() =>  {
        socket.on('game ready', () => {
            startGame()
            color === 'black' ? setToPlay(true) : setToPlay(false)
        })

        socket.on('black moved', board => {
            setBoard(board)
            color === 'white' ? setToPlay(true) : setToPlay(false)
        })

        socket.on('white moved', board => {
            setBoard(board)
            color === 'black' ? setToPlay(true) : setToPlay(false)
        })
    })

    const startGame = () => {
        setBoard(createBoard(9))
        setReady(true)
        setScore(0)
        setWhiteStones(0)
        setBlackStones(0)
        setToPlay(false)
    }

    return (
        <>
            <Board board={ createBoard(9) } size={ size }/>
            <StoneBase />
            <p>{ size }</p>
            <p>{ color }</p>
        </>
    )
}

export default Canvas;