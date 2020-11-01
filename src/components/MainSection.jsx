import React, { useState } from 'react';
import '../assets/styles/components/MainSection.scss';
import Simon from './Simon';
import BoardMessage from './BoardMessage';
import Clock from './Clock';
import Score from './Score';

//0 - START GAME MESSAGE
//1 - RESET GAME MESSAGE
//2 - END GAME MESSSAGE
//3 - ONLY SIMON

const BOAR_MESSAGE = ['Click to start the game','Game over, restart the game','Thanks for play'];

const MainSection = () => {

    const [gameState, setGameState] = useState({messageId: 0, level:0});

    console.log(gameState)

    return (
        <div className="main-section">
            <Score gameState={gameState}/>
            <Clock gameState={gameState} setGameState={setGameState}/>
            <div className="main-section__game">
                {
                    gameState.messageId!==3 &&
                    BOAR_MESSAGE
                    .map( (message) => (
                        <BoardMessage 
                            message={message}
                            gameState={gameState}
                            setGameState={setGameState}
                        />
                    ))
                    .filter( (val,ndx) => ndx===gameState.messageId)
                }

                <Simon startGame={gameState.messageId===3} setGameState={setGameState}/>
            </div>
        </div>
    );
}

export default MainSection;