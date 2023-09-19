import { useState } from 'react';

export default function ExampleControlledComponentCheckbox() {
  // 1. create state variable
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);
  return (
    <form>
      {JSON.stringify(isCookieAccepted)}
      <input
        type="checkbox"
        // 2. connect the state variables to the form fields
        checked={isCookieAccepted}
        // 3. Update the state value with the event.currentTarget.checked
        onChange={(event) => {
          console.log('type of checked', typeof event.currentTarget.checked);
          setIsCookieAccepted(event.currentTarget.checked);
        }}
      />
    </form>
  );
}
