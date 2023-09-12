export default function ExampleDisplayValues() {
  return (
    <>
      <h2>Not all the types are rendered by React:</h2>
      <h4>String</h4>
      string
      <h4>Number</h4>
      {12}
      <h4>Boolean</h4>
      {true}
      <h4>Null, Undefined, NaN</h4>
      {null}
      {undefined}
      {NaN}
      <h4>Array</h4>
      {[1, 2, 3, 4, 5]}
      <h4>Object</h4>
      {/* {{ name: 'lukas' }} */}
      {JSON.stringify({ name: 'lukas' })}
    </>
  );
}
