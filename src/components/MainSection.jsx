import React, { useState } from 'react';
import '../assets/styles/components/MainSection.scss';
import Config from '../config';
import Header from './Header';
import SubMessage from './SubMessage';
import BoardMessage from './BoardMessage';
import Simon from './Simon';
import Footer from './Footer';

const BOARD_MESSAGE = ['Click to start!!!','GAME OVER','Thanks for play!!!'];

const MainSection = () => {

    const [gameState, setGameState] = useState({messageId: Config.START_MESSAGE, level:0});

    return (
        <div className="main-section">
            <Header gameState={gameState} setGameState={setGameState}/>
            <SubMessage gameState={gameState}/>
            <div className="main-section__game">
                {
                    gameState.messageId!==Config.START_SIMON &&
                    BOARD_MESSAGE
                    .map( (message) => (
                        <BoardMessage 
                            message={message}
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