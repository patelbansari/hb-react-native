import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/index'
import rootReducer from './index'

const sagaMiddleware = createSagaMiddleware()
const middleWare = [sagaMiddleware]

const middleware = applyMiddleware(...middleWare)

const enhancers = compose(middleware)

const store = createStore(rootReducer, enhancers)

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga)

export default { store }
