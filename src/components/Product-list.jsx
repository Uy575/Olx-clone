import React from 'react'
import ProductCard from './Product-card'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react';
function ProductList() {
  const productState = useSelector((state)=>state.product)
  const {products,userSearchValue} = productState;
  const [filterProducts,setFilterProducts] = useState(products);

  
  const ProductsMapping = products.map((product)=>{
    return product
  })
   
  useEffect(()=>{
    const filterValue = ProductsMapping.filter((filteredProduct)=>{
      return filteredProduct.productName.includes(userSearchValue)
      
    })

    setFilterProducts(filterValue);
    
  },[userSearchValue,products])

  return (
    <div className='mainContainer'>
    {
        filterProducts.map(product =>{
            return <ProductCard key={product.id} product={product}/>
        })
    }


    </div>
     
  )
}

export default ProductList;