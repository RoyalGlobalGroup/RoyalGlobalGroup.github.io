import { Action, createReducer, on } from "@ngrx/store";
import { isMobile, isDesktop } from "./responsive.actions";
import { SizesDevice } from "../../../../shared/constants/global.constants";

export interface ResponsiveState {
  sizeDevice: null | typeof SizesDevice[keyof typeof SizesDevice];
}

export const initialState: ResponsiveState = {
  sizeDevice: null,
};

const _responsiveReducer = createReducer(
  initialState,

  on(isMobile, (state) => ({ ...state, sizeDevice: SizesDevice.MOBILE })),
  on(isDesktop, (state) => ({ ...state, sizeDevice: SizesDevice.DESKTOP }))
);

export function responsiveReducer(
  state: ResponsiveState | undefined,
  action: Action
) {
  return _responsiveReducer(state, action);
}
