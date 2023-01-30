import React from 'react'
import ProductCard from './Product-card'
function ProductList({products}) {
 console.log(products)
  return (
    <div className='mainContainer'>
    {
        products.map(product =>{
            return <ProductCard key={product.id} product ={product}/>
        })
    }


    </div>
     
  )
}

export default ProductList;