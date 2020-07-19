import React, { useEffect } from 'react';
import goat from '../image/goat.gif'
import useWebAnimations from "@wellyshen/use-web-animations";

function Goat() {

    const { ref, animate, getAnimation } = useWebAnimations({
        keyframes: [
            {transform: 'translate(0px)',height: '20%',width: '20%'},
            {transform: 'translate(-60vw)',height: '20%',width: '20%'},
            {transform: 'translate(-100vw, 12vh)',height: '20%',width: '20%'},
        ],
        timing: {
            duration: 10000,
            iterations: 1,
            direction: 'normal',
            fill: 'forwards',
        }
    });


    useEffect(() => {
        let onEarth = true;
        document.addEventListener('click', () => {
            onEarth = !onEarth;
            animate({
                keyframes: [
                    {transform: 'translate(0px)'},
                    {transform: 'translate(-60vw)'},
                    {transform: 'translate(-100vw, 12vh)'},
                ],
                timing: {
                    delay: 2000,
                    duration: 10000,
                    iterations: onEarth ? 1 : Infinity,
                    direction: 'normal',
                    fill: onEarth ? 'forwards' : 'none',
                    easing: 'ease-out'
                }
            })
        })
        document.addEventListener('keypress' ,() => {

            const animation = getAnimation();
            animation.updatePlaybackRate(animation.playbackRate * 1.5);

        })
    }, [getAnimation])

  return (
    <div>
        <img src={goat}
      style={{
        height: '40%',
        width: '20%',
        position: 'absolute',
        top: '65%',
        right: '0px'
        }}
        ref= {ref}
        alt={'goat'}
      ></img>

    </div>
  )
}

export default Goat
