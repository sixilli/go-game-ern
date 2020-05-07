import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Intersect from './intersect'

const useStyles = makeStyles({
  syledBoard: {
    background: '#555',
    color: 'white',
  },

  root: {
    display: 'inline-block',
    whiteSpace: 'normal',
    verticalAlign: 'middle',
  }
})

const Board = ({ board, color, updateBoard }) => {
  const classes = useStyles;
  return (
    <Box 
      display="flex"
      justifyContent="center" 
      background="#111"
      width="100%"
      height="100%"
      maxWidth="75vw"
    >
      <div className={classes.StyledBoard}>
        <div className="board-square">
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
      </div>
    </Box>
  )
}

export default Board
