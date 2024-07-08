import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || {}
};

const favoriteSlice = createSlice({
    name: 'favoriteSlice',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const { id } = action.payload;
            if (state.favorites[id]) {
                delete state.favorites[id];
            } else {
                state.favorites[id] = true;
            }
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        }
    }
});

const { reducer: favoriteReducer, actions: favoriteActions } = favoriteSlice;

export { favoriteReducer, favoriteActions };
