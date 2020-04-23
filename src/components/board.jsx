import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import Intersect from './intersect'

const StyledBoard = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid #333;
  width: 100%;
  max-width: 75vw;
  background: #111;
  color: white;
  ${props => props.cell && 'flex-direction: row;'}
`

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    whiteSpace: 'normal',
    verticalAlign: 'middle',
  }
})

const Board = ({ board, color, updateBoard }) => {
  const classes = useStyles;
  return (
    <StyledBoard>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div className={classes.root} key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <Intersect cell={cell} col={cellIndex} row={rowIndex} color={color} updateBoard={updateBoard} />
              )
            })}
          </div>
        ))}
      </div>
    </StyledBoard>
  )
}

export default Board
