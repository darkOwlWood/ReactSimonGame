import React from 'react';
import '../assets/styles/components/Header.scss';
import Clock from './Clock';
import Score from './Score';
import Level from './Level';

const Header = ({gameState, setGameState}) => {

    return(
        <div className="header">
            <div className="header__item">
                <Score gameState={gameState}/>
            </div>
            <div className="header__item">
                <Clock gameState={gameState} setGameState={setGameState}/>
            </div>
            <div className="header__item">
                <Level gameState={gameState}/>
            </div>
        </div>
    );
}

export default Header;