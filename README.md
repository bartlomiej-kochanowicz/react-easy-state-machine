# React Easy State Machine

Package that provides a simple and intuitive way to manage state in React applications. It allows developers to define state transitions, handle side effects, and trigger state changes in a declarative and easy to understand way.

## Installation

```bash
npm install react-easy-state-machine

# or

yarn add react-easy-state-machine

# or

pnpm install react-easy-state-machine
```

## Usage

### Define Machine states

```typescript
import { StateMachine } from 'react-easy-state-machine';

type MachineStates = 'view1' | 'view2' | 'view3';

type MachineActions = 'CHANGE_TO_VIEW_1' | 'CHANGE_TO_VIEW_2 | 'CHANGE_TO_VIEW_3';

const StateMachineDef = new StateMachine<MachineStates, MachineActions>(
  'email',
  { view1: 'view1', view2: 'view2', view3: 'view3' },
  {
    CHANGE_TO_VIEW_1: 'CHANGE_TO_VIEW_1',
    CHANGE_TO_VIEW_2: 'CHANGE_TO_VIEW_2',
    CHANGE_TO_VIEW_3: 'CHANGE_TO_VIEW_3'
  },
  {
    view1: { CHANGE_TO_VIEW_2: 'view2' },
    view2: { CHANGE_TO_VIEW_3: 'view3' },
  },
);
```

### Use Machine states

```typescript
import { useMachineState } from 'react-easy-state-machine';

const Component = () => {
  const { states, actions, updateState, compareState } = useStateMachine<
    MachineStates,
    MachineActions
  >(StateMachineDef);

  return (
    <div>
      {compareState(states.view1) && (
        <button onClick={() => updateState(actions.CHANGE_TO_VIEW_2)}>Change to view 2</button>
      )}

      {compareState(states.view2) && (
        <button onClick={() => updateState(actions.CHANGE_TO_VIEW_3)}>Change to view 3</button>
      )}

      {compareState(states.view3) && <div>View 3</div>}
    </div>
  );
};
```

### Use Machine states with context

```typescript
import { useMachineState } from 'react-easy-state-machine';

type MachineContext = {
  email: string;
};

const Component = () => {
  const { states, actions, updateState, compareState, context } = useStateMachine<
    MachineStates,
    MachineActions,
    MachineContext
  >(StateMachineDef);

  return (
    <div>
      {compareState(states.view1) && (
        <button onClick={() => updateState(actions.CHANGE_TO_VIEW_2, { email: 'test@domain.com' })}>
          Change to view 2
        </button>
      )}
      {compareState(states.view2) && (
        <button onClick={() => updateState(actions.CHANGE_TO_VIEW_3)}>
          Change to view 3 - {context} /* here context is defined */
        </button>
      )}
      {compareState(states.view3) && <div>View 3 - {context}</div>} /* here context is undefined */
    </div>
  );
};
```

## Issues

Feel free to raise an issue on Github if you find a bug or have a feature request
