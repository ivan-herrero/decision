import { combineReducers } from 'redux'

const mockReducer = (state = {}, action) => {
  switch (action.type) {
  default:
    return state
  }
}

const rootReducer = combineReducers({
  mockState: mockReducer
})

export default rootReducer
