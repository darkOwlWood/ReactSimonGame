import React, { useRef, useEffect, useState } from 'react';
import '../assets/styles/components/Clock.scss';
import Config from '../config/config';

const Clock = ({gameState,setGameState}) => {

    const timerId = useRef(null);
    const [time,setTime] = useState(0);

    useEffect(()=>{
        clearInterval(timerId.current);
        let time = gameState.messageId===Config.START_SIMON? Config.GAME_TIME/1000 : 0;
        setTime(time);
        setTimeout(()=>{
            if(time){
                time+=-1
                setTime(time);
                timerId.current = setInterval(()=>{
                    time+=-1
                    time? setTime(time):setGameState({messageId:Config.RESET_MESSAGE, level:0});
                },1000)//Execute this every second the seem like a clock
            }
        },Config.BLINK_TIME + (Config.DELAY_TIME * gameState.level));
    },[gameState.messageId,gameState.level]);

    return (
        <div className="clock">
            <span>Time: { time }</span>
        </div>
    )
}

export default Clock;