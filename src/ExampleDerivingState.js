import { useState } from 'react';

// function getPositiveValues(value1, value2) {
//   if (value1 >= 0 && value2 >= 0) {
//     return [value1, value2];
//   } else if (value1 >= 0 && value2 < 0) {
//     return [value1];
//   } else if (value2 >= 0 && value1 < 0) {
//     return [value2];
//   } else if (value1 < 0 && value2 < 0) {
//     return [];
//   }
// }

// SUMMARY

// If you find yourself creating multiple state variables. Chances are that you are overcomplicated things and need to use deriving state variables
// if you do a lot of if else statements maybe you can use an array method

export default function ExampleDerivingState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const positiveValues = [count1, count2].filter((count) => count > 0);
  // const positiveValues = getPositiveValues(count1, count2);

  return (
    <div>
      count 1:{' '}
      <button
        onClick={() => {
          setCount1(count1 - 1);
        }}
      >
        -
      </button>
      {count1}
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        +
      </button>
      <br />
      <br />
      count 2: <button onClick={() => setCount2(count2 - 1)}>-</button>
      {count2}
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <br />
      Only Count: {count1 > 0 && count1} {positiveValues.length === 2 && 'and'}
      {count2 > 0 && count2}
      {/*
      {count1 > 0 ? `count 1 = ${count1} ` : ''}
      {count1 > 0 && count2 > 0 ? ' and ' : ''}
      {count2 > 0 ? `count 2 = ${count2}` : ''} */}
    </div>
  );
}
