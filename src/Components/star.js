import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";


function Star() {

    const {ref, animate } = useWebAnimations();
    
    useEffect(() => {
        let onEarth = true;
        document.addEventListener('click', () => {
            if(onEarth){
            animate({
              keyframes: [
                  {height: '1px',width: '1px'},
                  {height: '12px',width: '12px'},
              ],
              timing: {
                  delay: 2000,
                  duration: 1000,
                  iterations: 2,
                  direction: 'alternate',
                  playbackRate: 1
              }
            })
        }
        onEarth = !onEarth;
        })
    }, [animate])
  return (
    <>
      <div style={{
          width: '0px',
          height: '0px',
          backgroundColor: 'white',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          position: 'absolute',
          top: '15px',
          left: '30px'
      }}
      ref={ref}
      >
      </div>
    </>
  )
}

export default Star
