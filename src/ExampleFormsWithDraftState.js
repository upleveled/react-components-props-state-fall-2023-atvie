import { useState } from 'react';

export default function ExampleFormsWithDraftState() {
  // This simulates a value coming from the Server/API
  const [username, setUsername] = useState('Lukas');
  // 1. Create a state variable
  const [usernameDraft, setUsernameDraft] = useState(username);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>Name: {username} </div>
      <input
        // 2. Connect the state with the input field
        value={usernameDraft}
        // 3. Update the draft state onChange event with currentTarget.value
        onChange={(event) => setUsernameDraft(event.currentTarget.value)}
      />
      {/* 4. Update the real state with the chosen draft state  */}
      <button onClick={() => setUsername(usernameDraft)}>update label</button>
    </form>
  );
}
