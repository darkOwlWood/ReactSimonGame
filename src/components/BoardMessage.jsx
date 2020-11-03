import React, { useRef } from 'react';
import '../assets/styles/components/BoardMessage.scss';
import Config from '../config/config';

const BoardMessage = ({message, gameState, setGameState}) => {
    
    const divEl = useRef(null);

    const handleClick = () => {
        divEl.current.classList.add('board-message--curtainUpping');
        setTimeout( () => {
            setGameState({messageId:Config.START_SIMON, level:1});
        },Config.UPPING_ANIMATION_TIME);
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