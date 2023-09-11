import { useState } from 'react';

export default function ExampleStateCounter() {
  // const [currentState, updater] = useState(Initial State)
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <br />
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        +
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        -
      </button>
    </div>
  );
}
