import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products : [],
  userSearchValue: '',
  singleProduct:[]

}

const ProductSlicer = createSlice({
  
   name:'product',
   initialState,
   
   reducers:{
       
        addProducts(state,action){
         state.products = action.payload;
       },

       userSearchValue(state,action){
        state.userSearchValue = action.payload;
       },
       addSingleProduct(state,action){
        state.singleProduct = action.payload;
      }
   }
});

export const {addProducts,userSearchValue,addSingleProduct} = ProductSlicer.actions
export default ProductSlicer.reducer


export function gettingApiData(endpoint){
  return async function productApiThunk(dispatch,getState){
   const req = await axios.get(endpoint)
   const res = await req;
   dispatch(addProducts(res.data));

  }


}


export function gettingApiDataForSingleProduct(endpoint){
  return async function productApiThunk(dispatch,getState){
   const req = await axios.get(endpoint)
   const res = await req;
   dispatch(addSingleProduct(res.data));

  }


}