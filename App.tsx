import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider as PaperProvider } from 'react-native-paper'

import rootReducer from './src/reducers'
import NavigationService from './src/navigation/navigationService'
import DecisionScreen from './src/screens/DecisionScreen/DecisionScreen'

const stackNavigator = createStackNavigator(
  {
    Decision: DecisionScreen,
  },
  {
    initialRouteName: 'Decision'
  }
)

const NavigationContainer = createAppContainer(stackNavigator)

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer ref={ref => NavigationService.setTopLevelNavigator(ref)} />
      </PaperProvider>
    </Provider>
  )
}

export default App
