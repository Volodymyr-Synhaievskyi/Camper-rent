import { campersReducer } from './campersData/slice.js';
import persistedFavoriteReducer from './favorite/persistedFavoriteReducer.js';

export const reducer = {
  campersData: campersReducer,
  favorite: persistedFavoriteReducer,
};
