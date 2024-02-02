/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetaReducer } from "@ngrx/store";
import { localStorageSyncReducer } from "../ngrx";
import { clearState } from "src/app/core/state/reducers/clear/clearState.reducer";

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
  clearState,
];
