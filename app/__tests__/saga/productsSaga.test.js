import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import API from '../../src/services/API'
import { getLengthOfProductData, getMockProductId, getWrongMockProductId, getProductDetailsData, getError } from '../../src/helper/mockData'

const productsAPI = API.products()

function* productsList(api) {
    const response = yield call(api.getProductsList);
    yield put({ type: 'PRODUCTS_LIST_SUCCESS', data: { length: response?.data?.length } });
}

function* productDetail(api,) {
    try {
        const action = yield take('PRODUCT_DETAIL_REQUEST');
        const response = yield call(api.getProductDetails, action.payload)
        if (!response?.data?.error) {
            yield put({
                type: 'PRODUCT_DETAIL_SUCCESS',
                data: { id: response?.data?.id, name: response?.data?.name },
            });
        } else {
            yield put({ type: 'FAILURE', data: response?.data });
        }
    } catch (e) {
        yield put({ type: 'FAILURE', error: e });
    }
}


it('Should check product list data....', () => {
    return expectSaga(productsList, productsAPI)
        .put({
            type: 'PRODUCTS_LIST_SUCCESS',
            data: getLengthOfProductData()
        })
        .dispatch({ type: 'PRODUCTS_LIST_REQUEST' })
        .run();
});

it('Should check product detail data....', () => {
    return expectSaga(productDetail, productsAPI)
        .put({
            type: 'PRODUCT_DETAIL_SUCCESS',
            data: getProductDetailsData()
        })
        .dispatch({ type: 'PRODUCT_DETAIL_REQUEST', payload: getMockProductId() })
        .run();
});

it('Should check wrong product detail data....', () => {
    return expectSaga(productDetail, productsAPI)
        .put({
            type: 'FAILURE',
            data: getError()
        })
        .dispatch({ type: 'PRODUCT_DETAIL_REQUEST', payload: getWrongMockProductId() })
        .run();
});



