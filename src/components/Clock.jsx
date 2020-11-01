import React, { useRef, useEffect, useState } from 'react';
import '../assets/styles/components/Clock.scss';
import Time from '../utils/ApplicationNumbers';

const Clock = ({gameState,setGameState}) => {

    const timerId = useRef(null);
    const [time,setTime] = useState(0);

    useEffect(()=>{
        clearInterval(timerId.current);
        let time = gameState.messageId===3? Time.GAME_TIME/1000 : 0;
        setTime(time);
        setTimeout(()=>{
            timerId.current = time?
                setInterval(()=>{
                    time+=-1
                    time? setTime(time):setGameState({messageId:1, level:0});
                },1000)
                : null;
        },Time.BLINK_TIME + (Time.DELAY_TIME * gameState.level));
    },[gameState.messageId,gameState.level]);

    return (
        <div className="clock">
            <span>{ time }</span>
        </div>
    )
}

export default Clock;