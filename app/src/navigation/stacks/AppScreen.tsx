import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { appScreens } from '../services/appRoutes'
import { stackScreenOptions } from '../services/settings'

const AppStack = createStackNavigator()

export const AppStackScreens = () => (
  <AppStack.Navigator screenOptions={stackScreenOptions}>
    {Object.entries({ ...appScreens }).map(([name, screen]) => (
      <AppStack.Screen
        name={name}
        key={name}
        component={screen.component}
        options={screen.options}
      />
    ))}
  </AppStack.Navigator>
)
