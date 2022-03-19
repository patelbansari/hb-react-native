import { combineReducers } from 'redux'
import { productsReducer } from './ProductsRedux'

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer
