import React from 'react'
import { createStore } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'

import rootReducer from './src/reducers'
import { App as AppContainer } from './src/components/App'

const store = createStore(rootReducer)

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    </ReduxProvider>
  )
}

export default App
