import React from 'react';
import styled from 'styled-components'
import Intersect from './intersect'

const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
  color: white;
`

const Board = (board) => (
  <StyledBoard width={board.length} height={board.length}>
    <div className="board">
      {Object.keys(board).map(row => Object.keys(board[row]).map(cell => { 
        return (
          <div className="cell" key={`${row}-${cell}`}>
            <Intersect value={board[row][cell]} onClick={null} />
          </div>
        )
      }))}
    </div>
  </StyledBoard>
)

export default Board