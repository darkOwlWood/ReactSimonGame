import React,{ useEffect, useState, useRef } from 'react';
import moment from 'moment';
import Time from '../utils/ApplicationNumbers';
import '../assets/styles/components/Score.scss';

const Score = ({gameState}) => {

    const timeElapsed = useRef(null);
    const [points, setPoints] = useState({score:0, bestScore:0});

    useEffect(() => {
        const score = (30 - Math.floor((moment().diff(timeElapsed.current)/100)));
        timeElapsed.current && setPoints({...points, score:points.score+score});
        if(gameState.messageId === 3){
            setTimeout(() => {
                timeElapsed.current = moment();
            }, Time.BLINK_TIME + (Time.DELAY_TIME * gameState.level));
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
            <span>Best score: {points.bestScore}</span><br/>
            <span>Current Score: {points.score}</span>
        </div>
    );
}

export default Score;