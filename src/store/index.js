import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
//import thunk from 'redux-thunk'
import saga from './saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware))

const  store = createStore(reducer,enhancer);
sagaMiddleware.run(saga)

export default store;

