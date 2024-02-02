import { GlobalState } from "../app.state";

export async function globalStateDefault() {
  const defaultState: GlobalState = {
    responsive: {
      sizeDevice: null,
    },
    language: {
      active: null,
    },
    loader: {
      isLoading: false,
    },
    authentication: {
      user: null,
    },
  };
  return defaultState;
}
