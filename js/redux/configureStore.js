
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer from './reducers';

export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
      autoRehydrate(),
      devTools({
        name: 'charades',
        realtime: true,
      }),
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
