import React from 'react';
import styled from 'styled-components'

//background-image: something.png
const StyledStone = styled.div`
    color: ${color};
    font-size: 15px;
`

const StoneBase = (color) => (
    <StyledStone color={color} />
)

export default StoneBase;