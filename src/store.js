import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';

const enchancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
)

const store = createStore(reducers, enchancers);

window.store = store;

export default store;
