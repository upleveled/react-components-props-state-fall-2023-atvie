// props
// function Tweet(props) {
// props.user
// props.message
// props.likes
// }

// props destructuring
function Tweet({ user, message, likes }) {
  return (
    <>
      <h2>Name: {user}</h2>
      <div>{message}</div>
      <div>Likes: {likes}</div>
    </>
  );
}

export default function ExamplePropDestructuring() {
  return (
    <>
      <div>
        <Tweet user="Lukas" message="I like React" likes={12} />
        <Tweet user="Karl" message="Please post on Slack" likes={32} />
      </div>
      <h3>Not all the types are rendered by React:</h3>
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
