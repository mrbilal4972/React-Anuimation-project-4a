import React from 'react';
import moon from '../image/moon.png'


function Moon() {

  return (
    <div>
      <img src={moon}
      style={{
        height: '100px',
        width: '100px',
        position: 'absolute',
        top: '50px',
        right: '50px'
        }}
        alt={'moon'}
      ></img>
    </div>
  )
}

export default Moon
