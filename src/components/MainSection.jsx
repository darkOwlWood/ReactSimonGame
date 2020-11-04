import React, { useState } from 'react';
import '../assets/styles/components/MainSection.scss';
import Config from '../config/config';
import Simon from './Simon';
import BoardMessage from './BoardMessage';
import Header from './Header';
import Footer from './Footer';

const BOARD_MESSAGE = ['Click to start!!!','GAME OVER','Thanks for play!!!'];

const MainSection = () => {

    const [gameState, setGameState] = useState({messageId: Config.START_MESSAGE, level:0});

    return (
        <div className="main-section">
            <Header gameState={gameState} setGameState={setGameState}/>
            <div className="main-section__game">
                {
                    gameState.messageId!==Config.START_SIMON &&
                    BOARD_MESSAGE
                    .map( (message) => (
                        <BoardMessage 
                            message={message}
                            gameState={gameState}
                            setGameState={setGameState}
                        />
                    ))
                    .filter( (val,ndx) => ndx===gameState.messageId)
                }

                <Simon startGame={gameState.messageId===Config.START_SIMON} setGameState={setGameState}/>
            </div>
            <Footer />
        </div>
    );
}

export default MainSection;