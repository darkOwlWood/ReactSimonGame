import React, { useRef } from 'react';
import '../assets/styles/components/BoardMessage.scss';
import Config from '../config';

const BoardMessage = ({message, setGameState}) => {
    
    const divEl = useRef(null);

    const handleClick = () => {
        divEl.current.classList.add('board-message--curtainUpping');
        setTimeout( () => {
            setGameState({messageId:Config.START_SIMON, level:1});
        },Config.BOARDMESSAGE_UPPING);
    }

    return (
        <div 
            ref={divEl}
            className="board-message board-message--curtainFalling" 
        >
            <span className="board-message__item" onClick={handleClick}>
                { message }
            </span>
        </div>
    );
}

export default BoardMessage;