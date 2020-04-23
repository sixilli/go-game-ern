import React from 'react';
import styled from 'styled-components'

const StyledIntersect = styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    background:
        linear-gradient(#000,#000),
        linear-gradient(#000,#000);
    background-position: center;
    background-size: 50% 2px,2px 50%; /*thickness = 2px, length = 50% (25px)*/
    background-repeat: no-repeat;
`

const Intersect = ({ cell, col, row,  color, updateBoard }) => {
    let display

    if (cell === 0) {
        display = 'empty'
    } 
    
    if (cell === 1) {
        display = 'black'
    } 
    
    if (cell === 2) {
        display = 'white'
    }

    const handleOnClick = () => {
        updateBoard(col, row)
    }

    return (
        <button className="intersect" onClick={handleOnClick}>
            {display}
        </button>
    )
}

export default Intersect