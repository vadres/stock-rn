import { FAB_TOGGLE_ACTIVE } from "./types";

export function toggleActive(active) {
  return {
    type: FAB_TOGGLE_ACTIVE,
    payload: !active
  };
}
