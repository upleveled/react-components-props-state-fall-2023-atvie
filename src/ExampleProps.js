/* props shape ----
name: String
age: number
address: {
  street: string,
  zipCode: number
}
*/

export default function ExampleProps(props) {
  return (
    <div>
      Name: {props.name}
      <br />
      Age: {props.age}
      <br />
      Street: {props.address.street}
      <br />
      ZipCode: {props.address.zipCode}
    </div>
  );
}
