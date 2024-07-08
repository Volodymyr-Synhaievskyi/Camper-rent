import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { camperService } from "../../services/camperService";

const initialState = {
    campers: [],
    loading:false
};

const getAll = createAsyncThunk(
    'camperSlice/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await camperService.getAll();
            return { data };
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const camperSlice = createSlice({
    name: 'camperSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.campers = action.payload.data;
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
});

const { reducer: camperReducer, actions } = camperSlice;

const camperActions = {
    ...actions, getAll
};

export { camperReducer, camperActions };