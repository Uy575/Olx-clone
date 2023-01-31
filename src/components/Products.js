import React from 'react'
import ProductList from './Product-list'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {gettingApiData } from '../Redux/ProductReducers'

function Products() {
  // const productInitialState = useSelector((state)=>state.product)
  // const {products} = productInitialState;
     const [isLoading,setIsLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
      
      //   const fetchingProduct = async ( ) =>{
      //      fetch('http://localhost:3001/products?_sort=featured&_order=desc')
      //      .then(res => res.json())
      //      .then(json => setProducts(json))
      //      .catch(e => console.log(e))
    
      //   } 
      //  fetchingProduct();
      dispatch(gettingApiData())
      setIsLoading(false);
    },[])
 
  
  return (
    <div >
    {
         isLoading === true?(
            <h1>Loading...</h1>
        ):(
      <ProductList/>
    )
        }
        </div>
  )
}

export default Products