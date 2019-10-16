import { StepActionTypes, UPDATE_STEP } from "../actions"

export const stepReducer = (state = 0, action: StepActionTypes) => {
  switch (action.type) {
    case UPDATE_STEP:
      return action.payload
    default:
      return state
  }
}
