import React from 'react';
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

const Board = ({ board }) => {
  console.log('board component:', board);
  return (
    <StyledBoard>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Intersect value={cell} onClick={null} />
            ))}
          </div>
        ))}
      </div>
    </StyledBoard>
  )
}

export default Board
