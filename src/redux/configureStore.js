import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
/*global process */
const middleware = applyMiddleware(thunk);
export default () =>
  process.env.NODE_ENV === 'test'
    ? createStore(reducer, middleware)
    : createStore(
        reducer,
        compose(
          middleware,
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      );
