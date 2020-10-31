import React, {useEffect, useRef} from 'react';
import '../assets/styles/components/SimonButton.scss';
import Time from '../utils/ApplicationNumbers' ;

const SimonButton = ({id,color,simonData,setSimonData,checkSimonSequence}) => {

    const divEl = useRef(null);

    useEffect( () => {
        const length = simonData.sequence.length;

        if(length){
            simonData.sequence.forEach( (number,ndx) => {
                if(id === number){
                    setTimeout(makeTheButtonBlink, Time.DELAY_TIME * (ndx+1));
                }
            });
    
            setTimeout( () => setSimonData({...simonData, allowClick: true}), 
            Time.BLINK_TIME + (Time.DELAY_TIME * simonData.level));
        }
    },[simonData.level]);

    const handleOnClick = () => {
        makeTheButtonBlink();
        checkSimonSequence(id);
    }

    function makeTheButtonBlink(){
        divEl.current.classList.add('blink');
        setTimeout( () => {
            divEl.current.classList.remove('blink');
        }, Time.BLINK_TIME);
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