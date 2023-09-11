import { useState } from 'react';

export default function ExampleStateEmail() {
  // 1. Create state for the Component
  const [email, setEmail] = useState('');

  return (
    <div>
      {/* Connect the current Value to the place you want to show it */}
      <h2>{email}</h2>

      {/* update state from an event */}
      <input
        onChange={(event) => setEmail(event.currentTarget.value)}
        value={email}
      />
    </div>
  );
}
