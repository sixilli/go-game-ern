import React from 'react';
import styled from 'styled-components'

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

const Board = ({ board }) => (
    <StyledBoard width={board[0].length} height={board.length}>
        {board.map(row => row.map((cell, x) => <ul key={x}>{cell[0]}</ul>))}
    </StyledBoard>
)

export default Board