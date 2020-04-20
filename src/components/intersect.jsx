import React, { useState } from 'react';
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

const Intersect = ({ value, onClick }) => {
    let color
    if (value === 0) {
        color = 'empty'
    } else if (value === 1) {
        color = 'black'
    } else if (value === 2) {
        color = 'white'
    } else {
        color = 'ya goofed'
    }

    console.log('intersect:', value)

    return (
        <button className="intersect" onClick={onClick}>
            {color}
        </button>
    )
}

export default Intersect