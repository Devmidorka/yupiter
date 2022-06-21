import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from './reducers/categorySlice'
import cardReducer from './reducers/cardSlice'
export const store = configureStore({
    reducer: {
        categoryReducer,
        cardReducer
    }
})