import React from 'react';
import '../assets/styles/components/Level.scss';

const Level = ({gameState}) => {
    return (
        <div className="level">
            Level: {gameState.level}
        </div>
    )
};

export default Level;