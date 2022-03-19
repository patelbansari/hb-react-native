import { ApisauceInstance } from 'apisauce'
import { Apis } from '../../constant'

const Products = (api: ApisauceInstance) => () => {
  const getProductsList = () => {
    return api.get(Apis.productsListUrl)
  }

  const getProductDetails = (payload: any) => {
    return api.get(Apis.productDetailUrl + `${payload.id}`)
  }

  return {
    getProductsList,
    getProductDetails,
  }
}

export default Products
