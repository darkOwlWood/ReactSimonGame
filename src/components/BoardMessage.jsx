import React, { useRef, useEffect } from 'react';
import '../assets/styles/components/BoardMessage.scss';

//START MESSAGE ---> SIMON
//RESTART MESSAGE ----> SIMON
//END GAME ----> SIMON

const UPPING_ANIMATION_TIME = 1000;
const FALLING_ANIMATION_TIME = 1350;

const BoardMessage = ({message, setGameState}) => {
    
    const divEl = useRef(null);

    useEffect(() => {
        setTimeout( () => {
            divEl.current.classList.remove('board-message--curtainFalling');
        },FALLING_ANIMATION_TIME);
    })

    const handleClick = () => {
        divEl.current.classList.add('board-message--curtainUpping');
        setTimeout( () => {
            setGameState(3);
        },UPPING_ANIMATION_TIME);
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