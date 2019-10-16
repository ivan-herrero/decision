export const UPDATE_STEP = 'UPDATE_STEP'

export interface UpdateStepAction {
  type: typeof UPDATE_STEP
  payload: number
}

export type StepActionTypes = UpdateStepAction

export const updateStep = (step: number) => ({ type: UPDATE_STEP, payload: step })
