import React from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  ImageStyle,
  ScaledSize,
  ScrollView,
  Text,
  View,
} from 'react-native'
import styles from './styles/ProductDetailsScreenStyles'
import RenderHtml from 'react-native-render-html'
import { Icons } from '../../assets'
import useProductDetailsScreen from './hooks/useProductDetailsScreen'
import { productDetail } from '../../redux/ProductsRedux'
import { getHighResolutionImage } from '../../helper/Utils'
import Error from '../../components/Error'
import ProductDetailSkeleton from './skeleton/ProductDetailSkeleton'

type Title = {
  title: string
}

type Description = {
  description: string
}

type Rating = {
  rating: number
}

type Stock = {
  stockStatus: string
}

type Promotion = {
  text: string
}

type Price = {
  price: number
  promotions: Array<Promotion>
}

type Detail = {
  detail: productDetail
}

type List = {
  path: string
  resolution: number
}

type Item = {
  item: {
    list: List[]
    group: string
  }
}

type Images = {
  images: Item[]
}

const renderItem = ({ item }: Item) => {
  return (
    <Image
      style={styles.productsImage as ImageStyle}
      source={{
        uri: getHighResolutionImage(item),
      }}
    />
  )
}

const ProductImages = ({images}: any) => {
  return (
    <FlatList
      style={styles.flatList}
      persistentScrollbar
      data={images}
      horizontal
      renderItem={renderItem}
      keyExtractor={(item) => item?.group}
    />
  )
}

const Title = ({ title }: Title) => {
  return (
    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.productTitle}>
      {title}
    </Text>
  )
}

const Description = ({ description }: Description) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.scrollView}>
      <RenderHtml
        contentWidth={Dimensions.get('window').width}
        source={{
          html: `
          ${description}
        `,
        }}
      />
    </ScrollView>
  )
}

export const Ratings = ({ rating }: Rating) => {
  return (
    <View style={styles.ratingView}>
      <Image source={Icons.star} style={styles.ratingImage as ImageStyle} />
      <Text style={styles.ratingText}>{`(${rating?.toFixed(2)})`}</Text>
    </View>
  )
}

const InStock = ({ stockStatus }: Stock) => {
  return (
    <View style={styles.inStockView(stockStatus)}>
      <Text style={styles.inStockText}>{stockStatus?.toLocaleLowerCase()}</Text>
    </View>
  )
}

const Price = ({ price, promotions }: Price) => {
  return (
    <View style={styles.priceView}>
      <Text style={styles.priceText}>{`£${price}`}</Text>
      {promotions?.length > 0 && (
        <View style={styles.promotionsView}>
          <Image
            source={Icons.promotion}
            style={styles.promotionIcon as ImageStyle}
          />
          <Text style={styles.promotionText}>{promotions[0]?.text}</Text>
        </View>
      )}
    </View>
  )
}

const Container = ({ detail }: Detail) => {
  return (
    <View style={styles.containerView}>
      <View style={styles.titleView}>
        <Title title={detail?.name} />
        <Ratings rating={detail?.rating} />
      </View>
      <InStock stockStatus={detail?.stock_status} />
      <Description description={detail?.description} />
    </View>
  )
}

const ProductDetailsScreen = (): React.ReactElement => {
  const { details, isDetailsFetching, error } = useProductDetailsScreen()

  return isDetailsFetching ? (
    <ProductDetailSkeleton />
  ) : error ? (
    <Error error={error} />
  ) : (
    <View style={styles.container}>
      <ProductImages images={details?.images ?? []} />
      <Container detail={details} />
      <Price price={details?.price ?? 0} promotions={details?.promotions} />
    </View>
  )
}

export default ProductDetailsScreen
