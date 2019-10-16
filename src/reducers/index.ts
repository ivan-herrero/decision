import { combineReducers } from 'redux'
import { stepReducer } from './stepReducer'

export interface State {
  step: number;
}

const rootReducer = combineReducers<State>({
  step: stepReducer
})

export default rootReducer
