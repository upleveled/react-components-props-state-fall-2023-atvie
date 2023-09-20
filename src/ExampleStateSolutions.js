import { useMachine } from '@xstate/react';
import { useReducer, useState } from 'react';
import { createMachine } from 'xstate';

// TRADITIONAL STATE MANAGEMENT WITH useState

export function StateManagementUseState() {
  const [lightbulb, setLightbulb] = useState({ status: 'on' });

  return (
    <div>
      <h2>State Management with useState</h2>
      <div>Lightbulb: {lightbulb.status}</div>
      <button
        onClick={() =>
          setLightbulb(
            lightbulb.status !== 'broken'
              ? { status: 'on' }
              : { status: 'broken' },
          )
        }
      >
        ON
      </button>
      <button
        onClick={() =>
          setLightbulb(
            lightbulb.status !== 'broken'
              ? { status: 'off' }
              : { status: 'broken' },
          )
        }
      >
        OFF
      </button>
      <button onClick={() => setLightbulb({ status: 'broken' })}>BREAK</button>
    </div>
  );
}

// OPTIONAL CONTENT useReducer

const initialLightbulbState = { status: 'on' };

function lightbulbReducer(lightbulb, action) {
  switch (action.type) {
    case 'turnOn': {
      if (lightbulb.status !== 'broken') {
        return { status: 'on' };
      }
      return lightbulb;
    }
    case 'turnOff': {
      if (lightbulb.status !== 'broken') {
        return { status: 'off' };
      }
      return lightbulb;
    }
    case 'break':
      return { status: 'broken' };
    default:
      throw new Error('Unknown action');
  }
}

export function StateManagementUseReducer() {
  const [lightbulb, dispatch] = useReducer(
    lightbulbReducer,
    initialLightbulbState,
  );
  return (
    <div>
      <h2>State Management with useReducer</h2>
      <div>Lightbulb: {lightbulb.status}</div>
      <button onClick={() => dispatch({ type: 'turnOn' })}>ON</button>
      <button onClick={() => dispatch({ type: 'turnOff' })}>OFF</button>
      <button onClick={() => dispatch({ type: 'break' })}>BREAK</button>
    </div>
  );
}

// OPTIONAL CONTENT XState

const lightbulbMachine = createMachine({
  id: 'lightbulb',
  initial: 'lightbulbOn',
  states: {
    lightbulbOn: {
      on: {
        TURN_OFF: 'lightbulbOff', // SNAKE_CASE
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbOff: {
      on: {
        TURN_ON: 'lightbulbOn',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbBroken: {
      on: {
        // No transitions when broken!
      },
    },
  },
});

export function StateManagementUseXState() {
  const [lightbulb, send] = useMachine(lightbulbMachine);
  return (
    <div>
      <h2>State Management with XState</h2>
      <div>Lightbulb: {lightbulb.value}</div>
      <button onClick={() => send('TURN_ON')}>ON</button>
      <button onClick={() => send('TURN_OFF')}>OFF</button>
      <button onClick={() => send('BREAK')}>BREAK</button>
    </div>
  );
}
