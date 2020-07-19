import React from 'react';
// import useWebAnimations from "@wellyshen/use-web-animations";


function Moon() {

    // const { ref, animate } = useWebAnimations({
    //     keyframes: [
    //         {transform: 'translateY(0px)'},
    //         {transform: 'translateY(100px)'},
    //     ],
    //     timing: {
    //         delay: 1000,
    //         duration: 2000,
    //         iterations: 2,
    //         direction: 'alternate',
    //         endDelay: 5000
    //     }
    // });

    

  return (
    <div>
      <img src={'https://lh3.googleusercontent.com/proxy/Ed8oBurJIlW5at187TEdXRk--weEoqYtaS16SMp6_6LGxA0C_ZvOvOdQxR5vfWHGhuG0hjv35rmCp3WUFs1z8XFj8uNhCaHM4rBQK3nC6YgOVJPhHqI'}
      style={{
        height: '100px',
        width: '100px',
        position: 'absolute',
        top: '50px',
        right: '50px'
        // clipPath: 'polygon(51% 19%, 69% 17%, 85% 28%, 100% 47%, 100% 100%, 0 100%, 0 75%, 18% 55%, 35% 32%)',
        }}
        // ref= {ref}
      ></img>
    </div>
  )
}

export default Moon
