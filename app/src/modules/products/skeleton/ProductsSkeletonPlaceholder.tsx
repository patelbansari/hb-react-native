import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import styles from '../styles/skeletonStyles'

const ProductSkeletonPlaceholder = () => {
  return (
    <SkeletonPlaceholder>
      {Array(6)
        .fill(0)
        ?.map((item, index) => {
          return (
            <View style={styles.container} key={index}>
              <View style={styles.item} />
              <View style={styles.item} />
            </View>
          )
        })}
    </SkeletonPlaceholder>
  )
}

export default ProductSkeletonPlaceholder
