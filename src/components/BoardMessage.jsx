import React, { useRef, useEffect } from 'react';
import '../assets/styles/components/BoardMessage.scss';
import Time from '../utils/ApplicationNumbers';

//START MESSAGE ---> SIMON
//RESTART MESSAGE ----> SIMON
//END GAME ----> SIMON

const BoardMessage = ({message, gameState, setGameState}) => {
    
    const divEl = useRef(null);

    const handleClick = () => {
        divEl.current.classList.add('board-message--curtainUpping');
        setTimeout( () => {
            setGameState({messageId:3, level:1});
        },Time.UPPING_ANIMATION_TIME);
    }

    return (
        <div 
            ref={divEl}
            className="board-message board-message--curtainFalling" 
            onClick={handleClick}
        >
            {
                message
            }
        </div>
    );
}

export default BoardMessage;