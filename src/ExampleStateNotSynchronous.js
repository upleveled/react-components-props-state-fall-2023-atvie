import { useState } from 'react';

export default function ExampleStateNotSynchronous() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div>
      light bulb is {isOn ? 'on 🌝' : 'off 🌑'}
      <button
        onClick={() => {
          console.log('before', isOn);
          setIsOn(!isOn);
          console.log('after', isOn);
        }}
      >
        toggle
      </button>
    </div>
  );
}
