import { useState } from 'react';

// Don't use 💥
function Antipattern() {
  return (
    <div>
      <button id="my-button">Dont' click!</button>
      <button
        id="my-button"
        onClick={() => {
          document.getElementById('my-button').textContent = 'clicked';
        }}
      >
        Click me!
      </button>
    </div>
  );
}

function NoAntipattern() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button>Dont' click!</button>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? 'Clicked' : 'Click me'}
      </button>
    </div>
  );
}

export default function ExampleReactAntipatterns() {
  return (
    <div>
      <Antipattern />
      <NoAntipattern />
    </div>
  );
}
