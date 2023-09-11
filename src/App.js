import ExampleComponents from './ExampleComponents';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';

export default function App() {
  return (
    <>
      <h1>Import And Export Components Example</h1>
      <ExampleComponents />

      {/* props shape ----
       name: String
       age: number
       address: {
       street: string,
       zipCode: number
      }
      */}
      <br />
      <br />
      <h1>Props Example</h1>
      <ExampleProps
        name="Philip"
        age={47}
        address={{ street: 'Raffaelgasse', zipCode: 1130 }}
      />
      <br />
      <br />
      <h1>State Example</h1>
      <ExampleStateCounter />
      <br />
      <br />
      <h1>Controlled State Example</h1>
      <ExampleStateEmail />
    </>
  );
}
