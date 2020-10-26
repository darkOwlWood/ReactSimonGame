import React, {useLayoutEffect, useRef, useState} from 'react';
import '../assets/styles/components/Simon.scss';
import SimonButton from './SimonButton';

const COLOR_LIST = ['red', 'yellow', 'green', 'blue'];

const Simon = () => {

    //The array reference change every is set up, the plain value number not
    const [gameData, setGameData] = useState({level:[1], secuence:[], allowClick:false});
    const secuenceRef = useRef([]);

    useLayoutEffect( () => {
        const secuence_copy = [];
        secuence_copy.push(...gameData.secuence);
        secuence_copy.push(Math.floor(Math.random()*4));
        secuenceRef.current = secuence_copy;
        setGameData({...gameData, secuence:secuence_copy});
    },[gameData.level]);
    
    const handleButtonClick = (id) => {
        if(gameData.allowClick){
            if(gameData.secuence[0] === id){

                //Secuence never going to be zero, is safe
                const isZero = !(gameData.secuence.length-1);
                setGameData({
                    level:      isZero? [gameData.level+1]:gameData.level,
                    secuence:   isZero? secuenceRef.current:gameData.secuence.slice(1),
                    allowClick: isZero? false:true,
                })

                console.log('Bravo!!!');
                !(gameData.secuence.length-1) && console.log('Next level');
                
            }else{
                setGameData({...gameData, secuence:[], level:[1]})
                console.log('Loser!!!');
            }
        }
    }

    const setAllowClick = (boolean) => {
        setGameData({...gameData, allowClick:boolean})
    }

    return (
        <div className="simon">
            {
                secuenceRef.current.length &&
                COLOR_LIST.map( (color,ndx) => (
                    <SimonButton 
                        id={ndx}
                        key={ndx} 
                        color={color}
                        secuence={secuenceRef.current}
                        onClick={handleButtonClick}
                        setAllowClick={setAllowClick}
                    />
                ))
            }
        </div>
    );
}

export default Simon;