import { InterfaceState, InterfaceActionType, TOGGLE_SIDEBAR } from "./types";

const initialState: InterfaceState = {
  showSideBar: true
};

export const interfaceReducer = (
  state = initialState,
  action: InterfaceActionType
) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, showSideBar: !state.showSideBar };
    default:
      return state;
  }
};
