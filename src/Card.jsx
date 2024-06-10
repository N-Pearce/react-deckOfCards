import {React, useState} from 'react';

const Card = ({suite, value, image}) => {
    const [{ angle, xPos, yPos }] = useState({
        angle: Math.random() * 60 - 30,
        xPos: Math.random() * 40 - 20,
        yPos: Math.random() * 40 - 20,
    });

    const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;

    return (
        <img 
            className='Card'
            src={image}
            style={{transform, position: 'absolute'}}
        />
    )
}

export default Card