import React from 'react';
import '../assets/styles/components/BoardMessage.scss';

//START MESSAGE ---> SIMON
//RESTART MESSAGE ----> SIMON
//END GAME ----> SIMON

const BoardMessage = ({message, setGameState}) => {
    return (
        <div className="board-message" onClick={() => setGameState(3)}>
            {
                message
            }
        </div>
    );
}

export default BoardMessage;