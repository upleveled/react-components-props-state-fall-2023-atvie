import { useState } from 'react';

export default function ExampleClassToFunction({ user }) {
  const [detailsShown, setDetailsShown] = useState(false);

  if (user === undefined) return 'User not found!';

  return (
    <>
      <img src={user.image} alt={user.imageAlt} />
      <h1>{user.name}</h1>
      <button onClick={() => setDetailsShown(!detailsShown)}>
        {detailsShown ? 'Hide' : 'Show'} Details
      </button>
      {detailsShown && <p>{user.details}</p>}
    </>
  );
}
