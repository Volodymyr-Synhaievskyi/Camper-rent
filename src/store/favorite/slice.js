import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
  },
  reducers: {
    addToFavorite: (state, { payload }) => {
      state.favorite.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter(item => item._id !== payload._id);
    },
  },
});

export const favorite = favoriteSlice.reducer;
export const { addToFavorite, removeFavorite } = favoriteSlice.actions;
