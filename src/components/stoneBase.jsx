import React from 'react';

const StoneBase = (props) => {
    const stoneBaseStyle = {
        fill: '#a16012',
        stroke: '#75450e',
        strokeWidth: '2px',
    }

    const baseSize = 5;
    const baseR = 10
    const meow = 'meow'

    return (
        <g>
            <path
                style={stoneBaseStyle}
                d={meow}
            />
            <circle 
                cx={baseSize}
                cy={baseSize}
                r={baseR}
                style={stoneBaseStyle}
            />
        </g>
    )
}

export default StoneBase;