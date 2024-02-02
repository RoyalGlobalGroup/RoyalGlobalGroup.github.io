import { createAction, props } from "@ngrx/store";
import { IUser } from "../interfaces/auth.interfaces";

// User actions
export const setUser = createAction(
  "[Authentication] setUser",
  props<{ authentication: IUser }>()
);
export const unSetUser = createAction("[Authentication] unSetUser");
