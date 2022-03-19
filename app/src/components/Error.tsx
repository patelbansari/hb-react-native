import React from 'react'
import { Text, View, ViewStyle } from 'react-native'
import { ApplicationStyles } from '../theme'

type Errors = {
  error: string
}

const Error = ({ error }: Errors) => {
  return (
    <View style={ApplicationStyles.error as ViewStyle}>
      <Text style={ApplicationStyles.errorText}>{error}</Text>
    </View>
  )
}

export default Error
