import React from 'react';
import sky from '../image/sky.jpeg';


function Sky() {


  return (
    <>
    <img src={sky}
      style={{
        height: '100vh',
        width: '100%',
        position: 'absolute',
        bottom: '0px',
        }}
        alt={'sky'}
      ></img>
    </>
  )
}

export default Sky
