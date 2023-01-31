import React from 'react'
import { NavLink } from 'react-router-dom';
function ProductCard({product}) {
  

     
  return (
    <NavLink style={{textDecoration:"none"}} to={`/detail/${product.id}`}>
    <div className= 'productCard'>    
    <span><img className='img' src={product.Image} alt={product.description}></img></span>
    <div className='container'>
    {product.featured === "true"?(
        <h1 className='featured'>featured</h1>
    ):""
  }
    <h3>Name: {product.productName}</h3>
    <h4>Price: {product.price}Pkr</h4>
    <p>Description: {product.description}</p>
    </div>
   </div> 
  </NavLink>
  )

}

export default ProductCard;