import React from 'react'
import { View } from 'react-native'

import { Stepper } from '../Stepper'
import styles from './styles'

interface StateProps {
  step: number;
}

interface Props extends StateProps { }

export const Footer = (props: Props) => {
  return (
    <View style={styles.container}>
      <Stepper step={props.step} />
    </View>
  )
}
