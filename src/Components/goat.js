import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

function Goat() {

    const { ref, animate, getAnimation } = useWebAnimations({
        keyframes: [
            {transform: 'translate(0px)',height: '20%',width: '20%'},
            {transform: 'translate(-60vw)',height: '20%',width: '20%'},
            {transform: 'translate(-100vw, 12vh)',height: '20%',width: '20%'},
        ],
        timing: {
            // delay: 000,
            duration: 10000,
            iterations: 1,
            direction: 'normal',
            fill: 'forwards',
        }
    });

    let onEarth = true;
    useEffect(() => {
        document.addEventListener('click', () => {
            onEarth = !onEarth;
            animate({
                keyframes: [
                    {transform: 'translate(0px)',height: '20%',width: '20%'},
                    {transform: 'translate(-60vw)',height: '20%',width: '20%'},
                    {transform: 'translate(-100vw, 12vh)',height: '20%',width: '20%'},
                ],
                timing: {
                    delay: 2000,
                    duration: 10000,
                    iterations: onEarth ? 1 : Infinity,
                    direction: 'normal',
                    fill: onEarth ? 'forwards' : 'none',
                    easing: 'ease-in-out'
                }
            })
        })
        document.addEventListener('keypress' ,() => {

            // console.log(getAnimation().playbackRate);
            const animation = getAnimation();
            animation.updatePlaybackRate(animation.playbackRate * 1.5);

        })
    }, [animate])

  return (
    <div>
        <img src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96d9a4be-c2f0-4952-b21e-3f6587be985f/d37tgyy-14690a34-33f4-499a-a344-9029b0f1c46b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTZkOWE0YmUtYzJmMC00OTUyLWIyMWUtM2Y2NTg3YmU5ODVmXC9kMzd0Z3l5LTE0NjkwYTM0LTMzZjQtNDk5YS1hMzQ0LTkwMjliMGYxYzQ2Yi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.zbGzodtWcYKLTzfIIQikNJctbnJ-dqGNcC20jffl7A8'}
      style={{
        height: '20%',
        width: '20%',
        position: 'absolute',
        top: '65%',
        right: '0px'
        // clipPath: 'polygon(51% 19%, 69% 17%, 85% 28%, 100% 47%, 100% 100%, 0 100%, 0 75%, 18% 55%, 35% 32%)',
        }}
        ref= {ref}
      ></img>

    </div>
  )
}

export default Goat
