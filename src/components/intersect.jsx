import React from 'react';

const Intersect = ({ cell, col, row,  color, updateBoard }) => {
    //const classes = useStyles()
    let display

    if (cell === 0) {
        display = 'empty'
    } 

    if (cell === -1) {
        display = 'captured'
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
        <button className="stone-area" onClick={handleOnClick}>
            {display}
        </button>
    )
}

export default Intersect