import { useState } from 'react';

export default function ExampleFormsWithControlledComponents() {
  // 1. Create a state variable
  const [usernameInput, setUsernameInput] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        // 2. Connect the state with the input field
        value={usernameInput}
        // 3. Update the state onChange event with currentTarget.value
        onChange={(event) => setUsernameInput(event.currentTarget.value)}
      />
      {/* 4. Show state */}
      <div>Name: {usernameInput} </div>
    </form>
  );
}
