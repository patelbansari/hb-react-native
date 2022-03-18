import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import NavigationRoutes from '../../navigation/constants/NavigationRoutes'

const ProductsScreen = (): React.ReactElement => {
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(NavigationRoutes.ProductDetailScreen as never)
        }}>
        <Text>Products</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductsScreen
