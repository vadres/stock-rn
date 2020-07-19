import { FAB_TOGGLE_ACTIVE, FabState } from "./types";

const STATE: FabState = {
  active: false
};

export default function(state: FabState = STATE, action) {
  switch (action.type) {
    case FAB_TOGGLE_ACTIVE:
      return { ...state, active: action.payload };
    default:
      return state;
  }
}
