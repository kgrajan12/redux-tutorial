import {combineReducers, createStore} from 'redux';
import {counter, textInput, toDo} from './reducer';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = combineReducers({counter, textInput, toDo});

const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = createStore(reducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
