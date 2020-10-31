import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import '../assets/styles/components/Simon.scss';
import SimonButton from './SimonButton';
import Time from '../utils/ApplicationNumbers';

const COLOR_LIST = ['red', 'yellow', 'green', 'blue'];

const Simon = ({startGame,setGameState}) => {

    const sequenceRef = useRef([]);
    const [simonData, setSimonData] = useState({level:0, sequence:[], allowClick:false});

    //When the game start is true the sequence for the simon is created
    useLayoutEffect( () => {
        if(startGame){
            const sequence = Array(Time.MAX_LEVEL)
                                .fill(COLOR_LIST.length)
                                .map( val => Math.floor(Math.random()*val) );
            sequenceRef.current = sequence;
            setSimonData({...simonData, level:1, sequence: [sequence[0]]});
        }else{
            setSimonData({level:0, sequence:[], allowClick:false});
        }
    },[startGame]);
    
    const checkSimonSequence = (id) => {
        if(simonData.sequence[0] === id){

            //sequence never going to be zero, is safe
            const isZero = !(simonData.sequence.length-1);

            if(isZero && simonData.level === Time.MAX_LEVEL){
                setGameState({messageId:2, level:Time.MAX_LEVEL});
                return;
            }

            setSimonData({
                level:      isZero? simonData.level+1:simonData.level,
                sequence:   isZero? sequenceRef.current.slice(0,simonData.level+1):simonData.sequence.slice(1),
                allowClick: isZero? false:true,
            });
            
            isZero && setGameState({messageId:3, level: simonData.level+1});
            
        }else{
            setGameState({messageId:1, level:0});
        }
    }

    return (
        <div className="simon">
            {
                COLOR_LIST.map( (color,ndx) => (
                    <SimonButton 
                        id={ndx}
                        key={ndx} 
                        color={color}
                        simonData={simonData}
                        setSimonData={setSimonData}
                        checkSimonSequence={checkSimonSequence}
                    />
                ))
            }
        </div>
    );
}

export default Simon;