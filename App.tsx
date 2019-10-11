import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider as PaperProvider } from 'react-native-paper'

import DecisionScreen from './src/screens/DecisionScreen/DecisionScreen'
import rootReducer from './src/reducers'

const AppNavigator = createStackNavigator(
  {
    Decision: DecisionScreen
  },
  {
    initialRouteName: 'Decision'
  }
)

const Navigation = createAppContainer(AppNavigator)

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Provider>
  )
}

export default App
