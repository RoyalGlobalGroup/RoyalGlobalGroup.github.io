import { ActionReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";

export function localStorageSyncReducer(
  reducer: ActionReducer<unknown>
): ActionReducer<unknown> {
  return localStorageSync({
    keys: ["authentication", "language"],
    rehydrate: true,
  })(reducer);
}
