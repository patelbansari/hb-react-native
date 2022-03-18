import React from 'react'
import { View, StatusBar } from 'react-native'
import AppNavigation from './navigation/AppNavigation'
import { ApplicationStyles, Colors } from './theme'

function App(): React.ReactElement {
  return (
    <View style={ApplicationStyles.screen.mainContainer}>
      <StatusBar
        backgroundColor={Colors.blueyGreyFour}
        barStyle="dark-content"
      />
      <AppNavigation />
    </View>
  )
}

export default App
