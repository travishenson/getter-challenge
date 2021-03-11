import { string } from 'prop-types';
import { animated, interpolate } from 'react-spring';

import './style.css';

export default function Card({ i, x, y, rot, scale, trans, bind, data }) {
  const { name, photo } = data[i];

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans)
        }}
      >
        <div className='card'>
          <div className='inner-card'>
            <img 
              className='profile-photo' 
              src={photo} 
              alt={`${name} profile photo`} 
            />
            <h2>{name}</h2>
          </div>
        </div>
      </animated.div>
    </animated.div>
  )
} 

Card.propTypes = {
  name: string,
  photo: string
};