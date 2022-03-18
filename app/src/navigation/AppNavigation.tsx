import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppStackScreens } from './stacks/AppScreen'

export default (): React.ReactElement => {
  return <NavigationContainer>{<AppStackScreens />}</NavigationContainer>
}
