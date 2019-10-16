import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import DecisionScreen from '../../screens/DecisionScreen/DecisionScreen'
import FactorScreen from '../../screens/FactorScreen/FactorScreen'

const stackNavigator = createStackNavigator(
  {
    Decision: {
      screen: DecisionScreen,
      navigationOptions: {
        title: 'Decision'
      }
    },
    Factor: {
      screen: FactorScreen,
      navigationOptions: {
        title: 'Factor'
      }
    },
  },
  {
    initialRouteName: 'Decision',
    defaultNavigationOptions: {
      headerLeft: null
    }
  }
)

export const NavigationContainer = createAppContainer(stackNavigator)
