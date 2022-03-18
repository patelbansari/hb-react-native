import React from 'react'
import { Colors, horizontalScale, verticalScale } from '../../theme'
import type { StackNavigationOptions } from '@react-navigation/stack'
import { Image, StyleSheet } from 'react-native'
import { StaticData, Strings } from '../../constant'

const renderImage = () => {
  return (
    <Image
      style={styles.headerImage}
      source={{
        uri: StaticData.HEADER_IMAGE_URI,
      }}
      resizeMode="contain"
    />
  )
}

export const stackScreenOptions: StackNavigationOptions = {
  headerBackTitleVisible: false,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: Colors.white,
  },
  headerTitleAlign: 'center',
}

export const productsOptions: StackNavigationOptions = {
  headerTitle: () => renderImage(),
}

export const productDetailsOptions: StackNavigationOptions = {
  title: Strings.details,
}

export const styles = StyleSheet.create({
  headerImage: { width: horizontalScale(40), height: verticalScale(40) },
})
