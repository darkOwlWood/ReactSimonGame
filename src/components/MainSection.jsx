import React, { useState } from 'react';
import '../assets/styles/components/MainSection.scss';
import Simon from './Simon';
import BoardMessage from './BoardMessage';

//0 - START GAME MESSAGE
//1 - RESET GAME MESSAGE
//2 - END GAME MESSSAGE
//3 - ONLY SIMON

const BOAR_MESSAGE = ['Click to start the game','Game over, restart the game','Thanks for play'];

const MainSection = () => {

    const [gameState, setGameState] = useState(0);

    console.log(gameState)

    return (
        <div className="main-section">
            <div className="main-section-wrapper">

                {
                    gameState!==3 &&
                    BOAR_MESSAGE
                    .map( (message) => (
                        <BoardMessage
                            key={1}
                            message={message}
                            setGameState={setGameState}
                        />
                    ))
                    .filter( (val,ndx) => ndx===gameState)
                }

                <Simon startGame={gameState===3} setGameState={setGameState}/>
            </div>
        </div>
    );
}

export default MainSection;