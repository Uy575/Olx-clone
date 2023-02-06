import React from 'react'
import ProductList from './Product-list'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {gettingApiData } from '../Redux/ProductReducers'

function Products() {
 
  //dispatching products api for homepage and creating list of products
     const [isLoading,setIsLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
      
      dispatch(gettingApiData("http://localhost:3001/products?_sort=featured&_order=desc"))
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