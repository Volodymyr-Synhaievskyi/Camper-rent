import { createAsyncThunk } from '@reduxjs/toolkit';

import { getDataAPI } from '../../api/camperAPI';

export const getCamperDataThunk = createAsyncThunk('camperData/fetchAll', (params, thunkAPI,) => {
  try {
    const response = getDataAPI(params);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
