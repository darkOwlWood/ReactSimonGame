import React, {useEffect, useRef} from 'react';
import '../assets/styles/components/SimonButton.scss';

const DELAY_TIME = 1000;
const BLINK_TIME = 250;

const SimonButton = ({id,color,gameData,setGameData,checkSimonSequence}) => {

    const divEl = useRef(null);

    useEffect( () => {
        gameData.sequence.forEach( (number,ndx) => {
            if(id === number){
                setTimeout( () => {
                    makeTheButtonBlink(
                        (ndx+1)===gameData.level?
                        ()=>{setGameData({...gameData, allowClick:true})}
                        :undefined
                    );
                }, DELAY_TIME * (ndx+1));
            }
        });
    },[gameData.level]);

    const handleOnClick = () => {
        makeTheButtonBlink();
        checkSimonSequence(id);
    }

    function makeTheButtonBlink(callBack = ()=>{}){
        divEl.current.classList.add('blink');
        setTimeout( () => {
            divEl.current.classList.remove('blink');
            callBack();
        }, BLINK_TIME);
    }

    return (
        <div 
            ref={divEl}
            className={color}
            onClick={gameData.allowClick? handleOnClick : ()=>{}}
        >
            <span className="nail"></span>
            <span className="nail"></span>
            <span className="nail"></span>
            <span className="nail"></span>
        </div>
    );
}

export default SimonButton;