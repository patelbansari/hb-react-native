import { createActions, createReducer } from 'reduxsauce'
import Immutable, { ImmutableObject } from 'seamless-immutable'
import { RootState } from './Store'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  productsListRequest: ['payload'],
  failure: ['error'],
  productsListSuccess: ['data'],
  productDetailRequest: ['payload'],
  productDetailSuccess: ['data'],
})

export const ProductsTypes = Types
const ProductsActions = Creators
export default ProductsActions

/* --- Define the types -------- */
type List = {
  path: string
  resolution: number
}
type Images = {
  group: string
  list: Array<List>
}
type Nullable<T> = T | null

type Promotion = {
  text: string
}

export type product = {
  images: Array<Images>
  name: string
  price: number
  rating: number
  id: string
  promotions: Array<Promotion>
}

export type productDetail = {
  images: Array<Images>
  name: string
  price: number
  rating: number
  description: string
  stock_status: string
}

interface AnyAction {
  type: string
  [key: string]: any
}

export interface InitialStateInterface {
  fetching: boolean
  error: Nullable<String>
  productsList: product[]
  productDetail: product
  isDetailsFetching: boolean
}

export interface productListRequestInterface {
  (
    state: ImmutableObject<InitialStateInterface>,
    action: AnyAction | { type: 'PRODUCTS_LIST_REQUEST' },
  ): ImmutableObject<InitialStateInterface>
}

export interface productDetailRequestInterface {
  (
    state: ImmutableObject<InitialStateInterface>,
    action: AnyAction | { type: 'PRODUCT_DETAIL_REQUEST'; payload: any },
  ): ImmutableObject<InitialStateInterface>
}

export interface productListSuccessInterface {
  (
    state: ImmutableObject<InitialStateInterface>,
    action: AnyAction | { type: 'PRODUCTS_LIST_SUCCESS'; data: productDetail },
  ): ImmutableObject<InitialStateInterface>
}

export interface productDetailSuccessInterface {
  (
    state: ImmutableObject<InitialStateInterface>,
    action: AnyAction | { type: 'PRODUCT_DETAIL_SUCCESS'; data: product[] },
  ): ImmutableObject<InitialStateInterface>
}

export interface failureInterface {
  (
    state: ImmutableObject<InitialStateInterface>,
    action: AnyAction | { type: 'FAILURE'; error: string },
  ): ImmutableObject<InitialStateInterface>
}

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: false,
  error: '',
  productsList: [],
  productDetail: {},
  isDetailsFetching: false
})

/* ------------- Selectors ------------ */
export const ProductsSelectors = {
  fetching: (state: RootState) => state.products.fetching,
  productsList: (state: RootState) => state.products.productsList,
  error: (state: RootState) => state.products.error,
  productDetail: (state: RootState) => state.products.productDetail,
  isDetailsFetching: (state: RootState) => state.products.isDetailsFetching,
}

/* ------------- Reducers ------------- */

export const productsListRequest: productListRequestInterface = (state) =>
  state.merge({ fetching: true, error: null })

const failure: failureInterface = (state, { error }) =>
  state.merge({ fetching: false, error, isDetailsFetching: false })

export const productsListSuccess: productListSuccessInterface = (
  state,
  { data },
) =>
  state.merge({
    productsList: data,
    fetching: false,
    error: null as any,
  })

export const productDetailRequest: productDetailRequestInterface = (state) =>
  state.merge({ isDetailsFetching: true, error: null })

export const productDetailSuccess: productDetailSuccessInterface = (
  state,
  { data },
) =>
  state.merge({
    productDetail: data,
    isDetailsFetching: false,
    error: null as any,
  })

/* ------------- Hookup Reducers To Types ------------- */

export const productsReducer = createReducer<any, any>(INITIAL_STATE, {
  [Types.PRODUCTS_LIST_REQUEST]: productsListRequest,
  [Types.FAILURE]: failure,
  [Types.PRODUCTS_LIST_SUCCESS]: productsListSuccess,
  [Types.PRODUCT_DETAIL_REQUEST]: productDetailRequest,
  [Types.PRODUCT_DETAIL_SUCCESS]: productDetailSuccess,
})
