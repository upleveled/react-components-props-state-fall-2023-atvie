import { useEffect, useState } from 'react';

export default function ExampleUseEffect() {
  const [title, setTitle] = useState('Lukas');
  const [count, setCount] = useState(0);

  // useEffect without dependency array, render on initial and every re-render
  useEffect(() => {
    document.title = title;
  });
  // userEffect with empty dependency array, only renders on initial render
  // useEffect(() => {
  //   document.title = title;
  // }, []);
  // userEffect with elements in dependency array, render on initial and
  // if the values in the dependency array have changed
  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setTitle('John')}> Set title to John</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
