import React from 'react'
import ProductList from './Product-list'
import { useState,useEffect } from 'react'

function Porducts() {
    const [isLoading,setIsLoading] = useState(true)
    const [products,setProducts] = useState([]) 

    useEffect(()=>{
      
        const fetchingProduct = async ( ) =>{
           fetch('http://localhost:3001/products?_sort=featured&_order=desc')
           .then(res => res.json())
           .then(json => setProducts(json))
           .catch(e => console.log(e))
    
            setIsLoading(false);
        }
         
       fetchingProduct();
    },[])
 
  
  return (
    <div >
    {
         isLoading === true?(
            <h1>Loading...</h1>
        ):(
      <ProductList products = {products}/>
    )
        }
        </div>
  )
}

export default Porducts