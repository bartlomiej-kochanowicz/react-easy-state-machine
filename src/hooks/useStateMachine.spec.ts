import { renderHook } from '@testing-library/react';
import { useStateMachine } from './useStateMachine';
import { StateMachine } from '../classes/StateMachine';
import { actions, states, transitions } from '../tests/stubs/StateMachine.stub';

describe('useStateMachine', () => {
  const machine = new StateMachine<keyof typeof states, keyof typeof actions>(
    'initial',
    states,
    actions,
    transitions,
  );

  it('should return states, actions, updateState and compareState', () => {
    const { result } = renderHook(() =>
      useStateMachine<keyof typeof states, keyof typeof actions>(machine),
    );

    expect(result.current.states).toBeDefined();
    expect(result.current.actions).toBeDefined();
    expect(result.current.updateState).toBeDefined();
    expect(result.current.compareState).toBeDefined();
  });

  it('should return the initial state', () => {
    const { result } = renderHook(() =>
      useStateMachine<keyof typeof states, keyof typeof actions>(machine),
    );

    expect(result.current.compareState('initial')).toBeTruthy();
  });
});
