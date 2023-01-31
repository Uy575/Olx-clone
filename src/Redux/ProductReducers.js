import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products : [],
  userSearchValue: ''

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
       }
   }
});

export const {addProducts,userSearchValue} = ProductSlicer.actions
export default ProductSlicer.reducer


export function gettingApiData(){
  return async function productApiThunk(dispatch,getState){
   const req = await axios.get('http://localhost:3001/products?_sort=featured&_order=desc')
   const res = await req;
   dispatch(addProducts(res.data));

  }


}