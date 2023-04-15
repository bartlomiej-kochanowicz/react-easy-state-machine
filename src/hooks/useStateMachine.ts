import { useState } from 'react';
import { StateMachine } from '../classes/StateMachine';

export const useStateMachine = <States extends string, Actions extends string>(
  stateMachine: StateMachine<States, Actions>,
) => {
  // Machine state with only State type
  const [currentState, setCurrentState] = useState<States>(stateMachine.getInitialState);

  // Check if machine can do provided action depends on predefined transitions
  const transition = (state: States, action: Actions): States => {
    const nextState = stateMachine.getTransitions?.[state]?.[action] as States;

    return nextState || state;
  };

  // Update machine state besed on transition function above
  const updateState = (action: Actions) => setCurrentState((state) => transition(state, action));

  // Compare provided state to current one
  const compareState = (state: States) => currentState === state;

  return {
    states: stateMachine.getStates,
    actions: stateMachine.getActions,
    updateState,
    compareState,
  };
};
