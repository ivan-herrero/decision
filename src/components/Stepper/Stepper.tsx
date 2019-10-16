import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import NavigationService from '../../navigation/navigationService'

interface Props {
  step: number;
}

export const Stepper = (props: Props) => {
  return (
    <View>
      <Text>Step #{props.step}</Text>
      <TouchableOpacity onPress={() => NavigationService.navigateToNextScreen(props.step)}>
        <Text>Click to navigate to next screen</Text>
      </TouchableOpacity>
    </View>
  )
}
