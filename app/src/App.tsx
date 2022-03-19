import React from 'react'
import { View, StatusBar, LogBox } from 'react-native'
import { Provider } from 'react-redux'
import AppNavigation from './navigation/AppNavigation'
import { ApplicationStyles, Colors } from './theme'
import reduxStore from './redux/Store'

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

function App(): React.ReactElement {
  return (
    <Provider store={reduxStore.store}>
      <View style={ApplicationStyles.screen.mainContainer}>
        <StatusBar
          backgroundColor={Colors.blueyGreyFour}
          barStyle="dark-content"
        />
        <AppNavigation />
      </View>
    </Provider>
  )
}

export default App
