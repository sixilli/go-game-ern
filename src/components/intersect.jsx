import React, { useState } from 'react';
import styled from 'styled-components'
import StoneBase from 'stoneBase';

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

const Intersect = (color) => {
    const [hasStone, setHasStone] = useState(0)
    const [stoneColor, setStoneColor] = useState('')

    const placeStone = (color) => {
        setHasStone(color === 1 ? 1 : 2)
        setStoneColor(color === 1 ? 'black' : 'white')
    }

    return (
        <button className="intersect" onClick={placeStone(color)}>
            {if (hasStone > 0) && <StoneBase color={stoneColor} />} 
        </button>
    )
}

export default Intersect