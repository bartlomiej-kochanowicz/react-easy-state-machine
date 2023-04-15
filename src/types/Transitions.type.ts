export type Transitions<States extends string, Actions extends string> = {
  [state in States]?: {
    [action in Actions]?: States;
  };
};
