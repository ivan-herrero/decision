import { connect } from 'react-redux'

import { updateStep } from '../../actions'
import { App } from './App'

const mapDispatchToProps = {
  updateStep: updateStep
}

export const AppContainer = connect(null, mapDispatchToProps)(App)
