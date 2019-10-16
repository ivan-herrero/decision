import React from 'react'
import { NavigationState } from 'react-navigation'

import NavigationService from '../../navigation/navigationService'
import { NavigationContainer } from '../NavigationContainer/NavigationContainer'
import { Footer } from '../Footer'

interface DispatchProps {
  updateStep: (step: number) => void;
}

interface Props extends DispatchProps { }

export const App = (props: Props) => {
  const updateNavigationStep = (_: NavigationState, nextState: NavigationState) => {
    props.updateStep(nextState.index)
  }

  return (
    <>
      <NavigationContainer
        ref={ref => NavigationService.setTopLevelNavigator(ref)}
        onNavigationStateChange={updateNavigationStep} />
      <Footer />
    </>
  )
}
