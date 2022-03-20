import { call, takeEvery, put, takeLatest } from '@redux-saga/core/effects'
import ProductsActions from '../redux/ProductsRedux'
import { ProductsTypes } from '../redux/ProductsRedux'
import API from '../services/API'

const productsAPI = API.products()

type API = {
  getProductDetails: (payload: Object) => void,
  getProductsList: () => void
}

export function checkSuccessRequestCode(code: number) {
  return [200, 201, 202, 203, 204].includes(code)
}

function* manageResponse(response: any, success: any, failure: any) {
  if (checkSuccessRequestCode(response?.status)) {
    yield put(success(response?.data ?? []))
  } else {
    yield put(failure(response?.data?.error || response?.problem))
  }
}

export function* getProductsList(api: API) {
  const response : Object = yield call(api.getProductsList)
  yield* manageResponse(
    response,
    ProductsActions.productsListSuccess,
    ProductsActions.failure,
  )
}

export function* getProductDetail(api : API, action: any) {
  const response: Object = yield call(api.getProductDetails, action.payload)
  yield* manageResponse(
    response,
    ProductsActions.productDetailSuccess,
    ProductsActions.failure,
  )
}

export default [
  takeEvery(ProductsTypes.PRODUCTS_LIST_REQUEST, getProductsList, productsAPI),
  takeLatest(
    ProductsTypes.PRODUCT_DETAIL_REQUEST,
    getProductDetail,
    productsAPI,
  ),
]
