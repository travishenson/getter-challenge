import { useState } from 'react';
import { useSprings } from 'react-spring';
import { useGesture } from 'react-with-gesture';

import './style.css';

import Card from '../Card';

// Import workers from workers.json
let workersData = require('../../api/workers.json');

// These variables set the to and from points for the react-spring library
const to = i => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});

const from = i => ({ rot: 0, scale: 1.25, y: 0 });

const trans = (r, s) =>
  `perspective(0px) rotateX(0deg) rotateY(1deg) rotateZ(0deg) scale(${s})`;

export default function Deck() {
  const [ gone ] = useState(() => new Set());

  const [props, set] = useSprings(workersData.length, i => ({
    to: to(i),
    from: from(i)
  }));

  // useGesture is a hook that allows the tracking of user gestures
  // Settings and config are stored in the bind const
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.5;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);

      set(i => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);

        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });

      if (!down && gone.size === workersData.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
    }
  );

  return props.map(({ x, y, rot, scale }, i) => (
    <Card
      key={i}
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      data={workersData}
      bind={bind}
    />
  ));
}