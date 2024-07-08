import {configureStore} from "@reduxjs/toolkit";
import {camperReducer} from "./slices/camperSlice";
import {favoriteReducer} from "./slices/favoriteSlice";


const store = configureStore({
    reducer:{
        campers:camperReducer,
        favorites:favoriteReducer
    }
});


export {store}