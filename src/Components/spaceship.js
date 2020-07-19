import React, { useEffect } from 'react';
import spaceship from '../image/spaceship.png';
import useWebAnimations from "@wellyshen/use-web-animations";

function Spaceship() {
  
  const { ref, animate } = useWebAnimations({
    keyframes: [
      {transform: 'translate(0,  0)', height: '0px',width: '0px'},
      {transform: 'translate(60vw, 25vh)', height: '28%',width: '30%'},
      {transform: 'translate(30vw, 50vh)', height: '38%',width: '40%'},
  ],
  timing: {
      delay: 1000,
      duration: 2000,
      iterations: 1,
      fill: 'forwards',
      direction: 'alternate',
      endDelay: 5000
  }
  });
  
    useEffect(() => {
      let onEarth = true;
        document.addEventListener('click', () => {
            animate({
                keyframes: [
                        {transform: 'translate(0,  0)', height: '0px',width: '0px'},
                        {transform: 'translate(60vw, 25vh)', height: '25%',width: '35%'},
                        {transform: 'translate(30vw, 50vh)', height: '35%',width: '45%'},
                    ],
                    timing: {
                        duration: 2000,
                        iterations: 1,
                        direction: onEarth ? 'reverse' : 'normal',
                        fill: 'forwards',
                        endDelay: 5000
                    }
            })
            onEarth = !onEarth;
        })
    }, [animate])

  return (
    <>
    <img ref={ref} 
    src={spaceship}
      style={{
        height: '0px',
        width: '0px',
        position: 'absolute',
        top: '0px',
        }}
        alt={'spaceship'}
      ></img>
      
    </>
  )
}

export default Spaceship
