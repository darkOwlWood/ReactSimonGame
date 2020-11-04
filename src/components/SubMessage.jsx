import React, { useRef, useEffect } from 'react';
import '../assets/styles/components/SubMessage.scss';
import Config from '../config';
import AirshipClear from '../assets/static/Airship_clear.wav';
import Death from '../assets/static/Death.wav';
import oneUpSound from '../assets/static/1_up.wav';

const SubMessage = ({ gameState }) => {

    const audioEl = useRef([]);

    console.log(gameState);

    useEffect(() => {
        
        if(gameState.messageId===Config.LOSE_MESSAGE){//When the user lose
            audioEl.current.src = Death;
            audioEl.current.play();
        }else if(gameState.messageId===Config.VICTORY_MESSAGE){//When the user win the game;
            audioEl.current.src = AirshipClear;
            audioEl.current.play(); 
        }else if(gameState.level!==0 && gameState.level!==1){//Every next level
            audioEl.current.src = oneUpSound;
            audioEl.current.play();
        }
    },[gameState.messageId, gameState.level]);

    return (
        <div className="sub-message">
            <audio ref={audioEl}></audio>
        </div>
    );
}

export default SubMessage;