import React, { useState } from 'react';
import styled from 'styled-components'
import StoneBase from './stoneBase';

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
    return (
        <button className="intersect" onClick={onClick}>
            {value}
        </button>
    )
}

export default Intersect