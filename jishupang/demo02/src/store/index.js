import { createStore , applyMiddleware , compose} from 'redux'
import reducer from './reducer'

/*
// thunkSTART
import thunk from 'redux-thunk'
// 周期函数 enhancer 执行两个函数 ， 相当于下面那两行注释， 但注释那样不对， createStore(parameter1,parameter2)最多接收2参数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))


const store = createStore(
  reducer,enhancer
  // applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// thunkEND
*/

// sagaSTART
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(reducer,enhancer)
sagaMiddleware.run(mySagas)
// sagaEND

export default store