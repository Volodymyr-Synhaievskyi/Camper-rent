import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favorite } from './slice.js';

const persistConfig = {
  key: 'favorite',
  storage,
};

const persistedFavoriteReducer = persistReducer(persistConfig, favorite);

export default persistedFavoriteReducer;
