import React, {useEffect, useRef} from 'react';
import '../assets/styles/components/SimonButton.scss';
import Config from '../config/config' ;

const SimonButton = ({id,lock,color,simonData,setSimonData,checkSimonSequence}) => {

    const divEl = useRef(null);

    useEffect( () => {
        const length = simonData.sequence.length;

        if(length){
            simonData.sequence.forEach( (number,ndx) => {
                if(id === number){
                    setTimeout(()=>makeTheButtonBlink('cyan'), Config.DELAY_TIME * (ndx+1));
                }
            });
    
            setTimeout( () => setSimonData({...simonData, allowClick: true}), 
            Config.BLINK_TIME + (Config.DELAY_TIME * simonData.level));
        }
    },[simonData.level]);

    const handleOnClick = async () => {
        if(lock.current){
            lock.current = false;
            await makeTheButtonBlink('yellow');
            checkSimonSequence(id);
            lock.current = true;
        }
    }

    async function makeTheButtonBlink(color){
        divEl.current.classList.add(color);
        return (
            new Promise((resolve,reject) => {
                setTimeout( () => {
                    divEl.current.classList.remove(color);
                    resolve();
                }, Config.BLINK_TIME);
            })
        );  
    }

    return (
        <div 
            ref={divEl}
            className={color}
            onClick={simonData.allowClick? handleOnClick : ()=>{}}
        >
            <span className="nail"></span>
            <span className="nail"></span>
            <span className="nail"></span>
            <span className="nail"></span>
        </div>
    );
}

export default SimonButton;