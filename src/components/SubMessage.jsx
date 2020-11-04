import React, { useRef, useEffect, useState } from 'react';
import '../assets/styles/components/SubMessage.scss';
import Config from '../config';
import AirshipClear from '../assets/static/Airship_clear.wav';
import Death from '../assets/static/Death.wav';
import oneUpSound from '../assets/static/1_up.wav';

const SubMessage = ({ gameState }) => {

    const spanEl = useRef([]);
    const audioEl = useRef([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if(gameState.messageId===Config.LOSE_MESSAGE){//When the user lose
            audioEl.current.src = Death;
            setMessage('Loser!!!');
        }else if(gameState.messageId===Config.VICTORY_MESSAGE){//When the user win the game;
            audioEl.current.src = AirshipClear;
            setMessage('Bravo!!!');
        }else if(gameState.level!==0 && gameState.level!==1){//Every next level
            audioEl.current.src = oneUpSound;
            setMessage('Next Level');
        }
    },[gameState.messageId, gameState.level]);
    
    useEffect(() => {
        if(message!==''){
            runAnimation();
            audioEl.current.play();
        }
    },[message]);

    function runAnimation() {
        spanEl.current.classList.add('sub-message__item--fadeInOut');
        setTimeout(() => {
            spanEl.current.classList.remove('sub-message__item--fadeInOut');
            setMessage('');
        },
        Config.SUBMESSAGE_FADE_IN_OUT);
    }

    return (
        <div className="sub-message">
            <span ref={spanEl} className="sub-message__item">{message}</span>
            <audio ref={audioEl}></audio>
        </div>
    );
}

export default SubMessage;