import React from 'react';
import grass from '../image/grass.jpg';

function Grass() {
  return (
    <>
      <img src={grass}
      style={{
        height: '300px',
        width: '100%',
        position: 'absolute',
        bottom: '0px',
        clipPath: 'polygon(51% 19%, 69% 17%, 85% 28%, 100% 47%, 100% 100%, 0 100%, 0 75%, 18% 55%, 35% 32%)',
        }}
      ></img>
    </>
  )
}

export default Grass
