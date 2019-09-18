import {createStore,applyMiddleware,compose} from 'redux'
import Reducer from './reducer'
import thunk from 'redux-thunk'
const sth= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const hance=sth(applyMiddleware(thunk))
const store=createStore(Reducer, 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    hance
    )
export default store;