import { SystemState, UPDATE_SESSION, SystemActionTypes } from "./types";

export function updateSesstion(newSystem: SystemState): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSystem
  };
}
