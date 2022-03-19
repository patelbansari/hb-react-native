import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavigationRoutes from '../../../navigation/constants/NavigationRoutes'
import ProductsActions, {
  product,
  ProductsSelectors,
} from '../../../redux/ProductsRedux'

const useProductsScreen = () => {
  const productList = useSelector(ProductsSelectors.productsList)
  const fetching = useSelector(ProductsSelectors.fetching)
  const error = useSelector(ProductsSelectors.error)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [list, setList] = useState<product[]>([])
  const [offset, setOffset] = useState(0)
  const DATA_LIMIT = 25

  useEffect(() => {
    dispatch(ProductsActions.productsListRequest())
  }, [dispatch])

  useEffect(() => {
    setList((list) => [
      ...list,
      ...productList?.slice(offset * DATA_LIMIT, (offset + 1) * DATA_LIMIT),
    ])
  }, [productList, offset, DATA_LIMIT])

  const onLoadMore = () => {
    if (productList?.length !== list?.length) setOffset(offset + 1)
  }

  const onItemClick = (id: string) => {
    navigation.navigate(NavigationRoutes.ProductDetailScreen as never, { id: id } as never)
  }

  return {
    productList: list,
    fetching,
    error,
    onLoadMore,
    onItemClick,
  }
}

export default useProductsScreen
