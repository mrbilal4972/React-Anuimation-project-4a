import React, { useEffect } from 'react';
import spaceship from '../image/spaceship.png';
import useWebAnimations from "@wellyshen/use-web-animations";

function Spaceship() {
  
  const { ref, animate } = useWebAnimations({
    keyframes: [
      {transform: 'translate(0,  0)', height: '0px',width: '0px'},
      {transform: 'translate(60vw, 25vh)', height: '25%',width: '35%'},
      {transform: 'translate(30vw, 50vh)', height: '35%',width: '45%'},
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
  let onEarth = true;
    useEffect(() => {
        document.addEventListener('click', () => {
          
          // console.log('spacship')
            animate({
                keyframes: [
                        {transform: 'translate(0,  0)', height: '0px',width: '0px'},
                        {transform: 'translate(60vw, 25vh)', height: '25%',width: '35%'},
                        {transform: 'translate(30vw, 50vh)', height: '35%',width: '45%'},
                    ],
                    timing: {
                        // delay: 1000,
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
      ></img>
      
    </>
  )
}

export default Spaceship
