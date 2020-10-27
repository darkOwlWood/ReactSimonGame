import React, {useEffect, useRef} from 'react';
import '../assets/styles/components/SimonButton.scss';

const DELAY_TIME = 1000;
const BLINK_TIME = 250;

const SimonButton = ({id,color,gameData,setGameData,onClick}) => {

    const divEl = useRef(null);

    useEffect( () => {
        gameData.sequence.forEach( (number,ndx) => {
            if(id === number){
                setTimeout( () => {
                    divEl.current.classList.add('blink');
                    setTimeout( () => {
                        divEl.current.classList.remove('blink');
                        (ndx+1)===gameData.level && setGameData({...gameData, allowClick:true});
                    }, BLINK_TIME)
                }, DELAY_TIME * (ndx+1));
            }
        });
    },[gameData.level]);

    return (
        <div 
            ref={divEl}
            onClick={() => onClick(id)}
            onMouseDown={() => divEl.current.classList.add('blink')}
            onMouseUp={() => divEl.current.classList.remove('blink')}
            className={`simon-button ${color}`}
        >
        </div>
    );
}

export default SimonButton;