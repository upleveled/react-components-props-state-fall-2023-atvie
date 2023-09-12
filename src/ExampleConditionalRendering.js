import React, { useState } from 'react';

export default function ExampleConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  return (
    <div>
      {/* Conditional Rendering with Ternary Operator */}
      {isLoggedIn ? <p>Welcome!</p> : <p>Please log in</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log In'}
      </button>
      <hr />
      {/* Conditional Rendering with Boolean Operator */}
      {isButtonVisible && <div>Click me</div>}
      <button onClick={() => setIsButtonVisible(!isButtonVisible)}>
        Toggle
      </button>
    </div>
  );
}
