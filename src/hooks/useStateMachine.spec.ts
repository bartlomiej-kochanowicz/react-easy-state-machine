import { act, renderHook } from '@testing-library/react';

import { StateMachine } from '../classes/StateMachine';
import { actions, states, transitions } from '../tests/stubs/StateMachine.stub';
import { useStateMachine } from './useStateMachine';

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

  it('should update the state', () => {
    const { result } = renderHook(() =>
      useStateMachine<keyof typeof states, keyof typeof actions>(machine),
    );

    act(() => {
      result.current.updateState(actions.CHANGE_TO_STATE1);
    });

    expect(result.current.compareState('state1')).toBeTruthy();
  });

  it('should not update the state', () => {
    const { result } = renderHook(() =>
      useStateMachine<keyof typeof states, keyof typeof actions>(machine),
    );

    act(() => {
      result.current.updateState(actions.CHANGE_TO_STATE2);
    });

    expect(result.current.compareState('initial')).toBeTruthy();
    expect(result.current.compareState('state1')).toBeFalsy();
  });
});
