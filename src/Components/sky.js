import React from 'react';
// import Grass from './grass';
// import Spaceship from './spaceship';
// import Star from './star'
// import useWebAnimations from "@wellyshen/use-web-animations";


function Sky() {

    // const {ref} = useWebAnimations({
    //     keyframes: [
    //         {tranform: 'translateY(0)'},
    //         {tranform: 'translateY(100px)'}
    //     ],
    //     timing: {
    //         duration: 4000
    //     }
    // })

  return (
    <>
    <img src={'https://cdn.clipart.email/6a4629356b124a2f872b513cc71f0a4b_star-night-clipart_612-433.jpeg'}
      style={{
        height: '100vh',
        width: '100%',
        position: 'absolute',
        bottom: '0px',
        // clipPath: 'polygon(51% 19%, 69% 17%, 85% 28%, 100% 47%, 100% 100%, 0 100%, 0 75%, 18% 55%, 35% 32%)',
        }}
        // onClick={play}
      ></img>
      {/* <div
      style={{
          backgroundImage: `url(${'https://cdn.clipart.email/6a4629356b124a2f872b513cc71f0a4b_star-night-clipart_612-433.jpeg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '100vh',
          width: '100%'
           }}> */}

      {/* </div> */}
    </>
  )
}

export default Sky
