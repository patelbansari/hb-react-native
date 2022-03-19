import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Error from '../../components/Error'
import { Strings } from '../../constant'
import { getHighResolutionImage } from '../../helper/Utils'
import { product } from '../../redux/ProductsRedux'
import { Ratings } from '../productDetails/ProductDetailsScreen'
import useProductsScreen from './hooks/useProductsScreen'
import ProductSkeletonPlaceholder from './skeleton/ProductsSkeletonPlaceholder'
import styles from './styles/ProductsScreenStyles'

type Product = {
  product: product
  onItemClick: (id: string) => void
}

type Products = {
  products: Array<product>
  onLoadMore: () => void
  onItemClick: (id: string) => void
}

const Title = () => {
  return <Text style={styles.title}>{Strings.ourProducts}</Text>
}

const Item = ({ product, onItemClick }: Product) => {
  return (
    <View style={styles.itemView}>
      <TouchableOpacity
        onPress={() => onItemClick(product?.id)}
        style={styles.touchableItem}>
        <Image
          style={styles.itemImage}
          source={{
            uri: getHighResolutionImage(product?.images[0]),
          }}
        />
        <Text style={styles.itemTitle} numberOfLines={2} ellipsizeMode="tail">
          {product?.name}
        </Text>
        <Text style={styles.itemPrice}>{`£${product?.price}`}</Text>
        {product?.rating && <Ratings rating={product?.rating} />}
      </TouchableOpacity>
    </View>
  )
}

const ProductsList = ({ products, onLoadMore, onItemClick }: Products) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.flatList}
      data={products}
      numColumns={2}
      keyExtractor={(item) => item?.name}
      renderItem={({ item }) => (
        <Item key={item.name} product={item} onItemClick={onItemClick} />
      )}
      onEndReached={onLoadMore}
    />
  )
}

const ProductsScreen = (): React.ReactElement => {
  const { productList, fetching, error, onLoadMore, onItemClick } =
    useProductsScreen()

  return (
    <View style={styles.container}>
      <Title />
      {!fetching && !error ? (
        <ProductsList
          products={productList}
          onLoadMore={onLoadMore}
          onItemClick={onItemClick}
        />
      ) : error ? (
        <Error error={error} />
      ) : (
        <ProductSkeletonPlaceholder />
      )}
    </View>
  )
}

export default ProductsScreen
