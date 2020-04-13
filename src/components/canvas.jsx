import React, { useState } from 'react';
import Board from './board';
import StoneBase from './stoneBase';
import createBoard from '../gameExports';

const Canvas = () => {
    const[board, setBoard] = useState(false)
    const[size, setSize] = useState(9)
    const[whiteStones, setWhiteStones] = useState(0)
    const[blackStones, setBlackStones] = useState(0)
    const[score, setScore] = useState(0)
    const[playerReady, setPlayerReady] = useState(false)
    const[toPlay, setToPlay] = useState('')

    const startGame = () => {
        setBoard(createBoard(size))
        setPlayerReady(true)
        setScore(0)
        setWhiteStones(0)
        setBlackStones(0)
        setToPlay('black')
    }

    return (
        <>
            <Board board={createBoard(9)}/>
            <StoneBase />
        </>
    )
}

export default Canvas;