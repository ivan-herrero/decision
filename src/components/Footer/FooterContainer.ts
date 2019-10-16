import { connect } from 'react-redux'

import { State } from '../../reducers'
import { Footer } from './Footer'

const mapStateToProps = (state: State) => ({
  step: state.step
})

export const FooterContainer = connect(mapStateToProps)(Footer)
