import { StateMachine } from './StateMachine';

const states = {
  initial: 'initial',
  state1: 'state1',
  state2: 'state2',
  final: 'final',
} as const;

const actions = {
  CHANGE_TO_STATE1: 'CHANGE_TO_STATE1',
  CHANGE_TO_STATE2: 'CHANGE_TO_STATE2',
  CHANGE_TO_FINAL: 'CHANGE_TO_FINAL',
} as const;

const transitions = {
  initial: {
    CHANGE_TO_STATE1: 'state1',
  },
  state1: {
    CHANGE_TO_STATE2: 'state2',
  },
  state2: {
    CHANGE_TO_FINAL: 'final',
  },
} as const;

describe('StateMachine', () => {
  const machine = new StateMachine<keyof typeof states, keyof typeof actions>(
    'initial',
    states,
    actions,
    transitions,
  );

  it('should create a new StateMachine', () => {
    expect(machine).toBeInstanceOf(StateMachine);
  });

  it('should return the initial state', () => {
    expect(machine.getInitialState).toBe('initial');
  });

  it('should return the states', () => {
    expect(machine.getStates).toEqual(states);
  });

  it('should return the actions', () => {
    expect(machine.getActions).toEqual(actions);
  });

  it('should return the transitions', () => {
    expect(machine.getTransitions).toEqual(transitions);
  });
});
