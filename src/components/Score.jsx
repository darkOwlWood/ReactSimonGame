import React,{ useEffect, useState, useRef } from 'react';
import moment from 'moment';
import Config from '../config/config';
import '../assets/styles/components/Score.scss';

const Score = ({gameState}) => {

    const timeElapsed = useRef(null);
    const [points, setPoints] = useState({score:0, bestScore:0});

    useEffect(() => {
        const score = (Config.GAME_TIME/100 - Math.floor(moment().diff(timeElapsed.current)/100));
        timeElapsed.current && setPoints({...points, score:points.score+score});
        if(gameState.messageId === Config.START_SIMON){
            setTimeout(() => {
                timeElapsed.current = moment();
            }, Config.BLINK_TIME + (Config.DELAY_TIME * gameState.level));
        }else{
            timeElapsed.current = null;
            setPoints({...points, score:0});
        }
    },[gameState.messageId,gameState.level]);

    useEffect(()=>{
        const bestScore = points.score>points.bestScore? points.score:points.bestScore;
        setPoints({...points, bestScore});
    },[points.score]);

    return (
        <div className="score">
            <span>Best: {points.bestScore}</span>
            <span>Score: {points.score}</span>
        </div>
    );
}

export default Score;