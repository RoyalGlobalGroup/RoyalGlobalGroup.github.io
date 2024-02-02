import { Action, createReducer, on } from "@ngrx/store";

import * as authActions from "./authentication.actions";
import { IUser } from "../interfaces/auth.interfaces";

export interface UserState {
  user: IUser | null;
}

export const initialState: UserState = {
  user: null,
};

const _authenticationReducer = createReducer(
  initialState,
  on(authActions.setUser, (state, { authentication }) => ({
    ...state,
    user: { ...authentication },
  })),
  on(authActions.unSetUser, (state) => ({ ...state, user: null }))
);

export function authenticationReducer(
  state: UserState | undefined,
  action: Action
) {
  return _authenticationReducer(state, action);
}
