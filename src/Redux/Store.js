import { configureStore } from "@reduxjs/toolkit";
import productReducers from "./ProductReducers";
const store = configureStore({
 
    reducer: {
        product: productReducers
    }

})

export default store