
import { AsyncStorage } from 'react-native';
import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer from './reducers';


export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
      // autoRehydrate()
  );

  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer,
  );
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
