import ExampleClassToFunction from './ExampleClassToFunction';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleDisplayValues from './ExampleDisplayValues';
import ExampleFormsWithControlledComponents from './ExampleFormsWithControlledComponents';
import ExampleFormsWithDraftState from './ExampleFormsWithDraftState';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExamplePropDestructuring from './ExamplePropDestructuring';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';
import ExampleStateNotSynchronous from './ExampleStateNotSynchronous';
import ExampleStylingOptions from './ExampleStylingOptions';

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
      <br />
      <br />
      <h1>State is not Synchronous Example</h1>
      <ExampleStateNotSynchronous />
      <br />
      <br />
      <h1>Prop Destructuring Example</h1>
      <ExamplePropDestructuring />
      <br />
      <br />
      <h1>Display Values in React Example</h1>
      <ExampleDisplayValues />
      <br />
      <br />
      <h1>Mapping Over Arrays Example</h1>
      <ExampleMappingOverArrays />
      <br />
      <br />
      <h1>Conditional Rendering Example</h1>
      <ExampleConditionalRendering />
      <br />
      <br />
      <h1>Forms with Controlled Components Example</h1>
      <ExampleFormsWithControlledComponents />
      <br />
      <br />
      <h1>Forms with Draft State Example</h1>
      <ExampleFormsWithDraftState />
      <br />
      <br />
      <h1>Lifting State Up Example</h1>
      <ExampleLiftingStateUp />
      <br />
      <br />
      <h1>Class to Function Example</h1>
      <ExampleClassToFunction
        user={{
          details: 'details',
          name: 'jose',
          imageAlt: 'this is an image',
          image:
            'https://api.memegen.link/images/buzz/memes/memes_everywhere.png?width=400',
        }}
      />
      <br />
      <br />
      <h1>Styling Options Example</h1>
      <ExampleStylingOptions />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
