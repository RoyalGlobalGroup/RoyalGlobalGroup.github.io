import { LOGOUT } from "./clearState.actions";

export function clearState(reducer: (arg0: unknown, arg1: unknown) => unknown) {
  return function (state: undefined, action: { type: string }) {
    if (action.type === LOGOUT) {
      state = undefined;
    }

    return reducer(state, action);
  };
}
