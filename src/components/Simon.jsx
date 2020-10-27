import React, {useLayoutEffect, useRef, useState} from 'react';
import '../assets/styles/components/Simon.scss';
import SimonButton from './SimonButton';

const COLOR_LIST = ['red', 'yellow', 'green', 'blue'];
const MAX_LEVEL = 10;

const Simon = () => {

    //The array reference change every is set up, the plain value number not
    const [gameData, setGameData] = useState({level:1, sequence:[], allowClick:false});
    const sequenceRef = useRef([]);

    useLayoutEffect( () => {
        const sequence = Array(MAX_LEVEL)
                            .fill(COLOR_LIST.length)
                            .map( val => Math.floor(Math.random()*val) );
        sequenceRef.current = sequence;
        setGameData({...gameData, sequence: [sequence[0]]});
    },[]);
    
    const handleButtonClick = (id) => {
        if(gameData.allowClick){
            if(gameData.sequence[0] === id){

                //sequence never going to be zero, is safe
                const isZero = !(gameData.sequence.length-1);

                if(isZero && gameData.level === MAX_LEVEL){
                    setGameData({level:1, sequence:[], allowClick:false});
                    console.log('Thanks for play my game!!!');
                    return;
                }

                setGameData({
                    level:      isZero? gameData.level+1:gameData.level,
                    sequence:   isZero? sequenceRef.current.slice(0,gameData.level+1):gameData.sequence.slice(1),
                    allowClick: isZero? false:true,
                });

                console.log('Bravo!!!');
                isZero && console.log('Next level');
                
            }else{
                setGameData({level:1, sequence:[], allowClick:false});
                console.log('Loser!!!');
            }
        }
    }

    return (
        <div className="simon">
            {
                sequenceRef.current.length &&
                COLOR_LIST.map( (color,ndx) => (
                    <SimonButton 
                        id={ndx}
                        key={ndx} 
                        color={color}
                        gameData={gameData}
                        setGameData={setGameData}
                        onClick={handleButtonClick}
                    />
                ))
            }
        </div>
    );
}

export default Simon;