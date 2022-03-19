import React from 'react'
import { Colors, Fonts, horizontalScale, verticalScale } from '../../theme'
import type { StackNavigationOptions } from '@react-navigation/stack'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { StaticData, Strings } from '../../constant'
import { Icons } from '../../assets'

const renderImage = () => {
  return (
    <View style={styles.headerView}>
      <Image source={Icons.dots} style={styles.dot} />
      <Image
        style={styles.headerImage}
        source={{
          uri: StaticData.HEADER_IMAGE_URI,
        }}
        resizeMode="contain"
      />
    </View>
  )
}

export const stackScreenOptions: StackNavigationOptions = {
  headerBackTitleVisible: false,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: Colors.white,
  },
  headerTitleAlign: 'center',
  headerTintColor: Colors.black,
  headerTitleStyle: {
    fontFamily: Fonts.type.montserratMedium,
  },
}

export const productsOptions: StackNavigationOptions = {
  headerTitle: () => renderImage(),
}

export const productDetailsOptions: StackNavigationOptions = {
  title: Strings.details,
}

export const styles = StyleSheet.create({
  headerImage: { width: horizontalScale(40), height: verticalScale(40) },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width - 30,
  },
  dot: {
    width: horizontalScale(24),
    height: verticalScale(24),
    position: 'absolute',
    left: 0,
  },
})
