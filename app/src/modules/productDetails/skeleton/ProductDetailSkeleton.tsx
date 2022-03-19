import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import styles from '../styles/ProductDetailSkeletonStyles'

const ProductDetailSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.imageView} />
      <View style={styles.item} />
      <View style={styles.item} />
      <View style={styles.item} />
      <View style={styles.item} />
    </SkeletonPlaceholder>
  )
}

export default ProductDetailSkeleton
