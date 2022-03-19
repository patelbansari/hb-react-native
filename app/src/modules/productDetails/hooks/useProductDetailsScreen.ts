import { useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { Route } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductsActions, {
  ProductsSelectors,
} from '../../../redux/ProductsRedux'

const useProductDetailsScreen = () => {
  const dispatch = useDispatch()
  const route: Route = useRoute()
  const details = useSelector(ProductsSelectors.productDetail)
  const isDetailsFetching = useSelector(ProductsSelectors.isDetailsFetching)
  const error = useSelector(ProductsSelectors.error)

  useEffect(() => {
    dispatch(ProductsActions.productDetailRequest({ id: route?.params?.id }))
  }, [dispatch, route])

  return {
    details,
    isDetailsFetching,
    error
  }
}

export default useProductDetailsScreen
