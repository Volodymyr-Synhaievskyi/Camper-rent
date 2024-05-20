import { createSlice } from '@reduxjs/toolkit';
import { handleFulfilledData, handlePending, handleRejected } from './handlers';
import { getCamperDataThunk } from './thunk';
import {
  addSelectedCamper,
  removeSelectedCamper,
  addFilter,
  clearFilter,
  changeCurrentPage,
} from './actionFile.js';

const dataSlice = createSlice({
  name: 'campersData',
  initialState: {
    filterData: null,
    campersData: [],
    currentPage: 1,
    camperSelected: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCamperDataThunk.fulfilled, handleFulfilledData)
      .addCase(addSelectedCamper, (state, action) => {
        state.camperSelected = action.payload;
      })
      .addCase(removeSelectedCamper, (state) => {
        state.camperSelected = null;
      })
      .addCase(changeCurrentPage, (state, action) => {
        state.currentPage = action.payload;
      })
      .addCase(clearFilter, (state) => {
        state.filterData = null;
      })
      .addCase(addFilter, (state, action) => {
        state.filterData = {
          // ...state.filterData,
          ...action.payload,
        };
      })
      .addMatcher((action) => action.type.endsWith('pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('rejected'), handleRejected);
  },
});

export const campersReducer = dataSlice.reducer;
