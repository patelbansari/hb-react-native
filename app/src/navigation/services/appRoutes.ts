import ProductDetailsScreen from '../../modules/productDetails/ProductDetailsScreen'
import ProductsScreen from '../../modules/products/ProductsScreen'
import NavigationRoutes from '../constants/NavigationRoutes'
import { productDetailsOptions, productsOptions } from './settings'

export const appScreens = {
  [NavigationRoutes.ProductsScreen]: {
    component: ProductsScreen,
    options: productsOptions,
  },
  [NavigationRoutes.ProductDetailScreen]: {
    component: ProductDetailsScreen,
    options: productDetailsOptions,
  },
}
