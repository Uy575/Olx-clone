import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Pages/Home-Page/Home.css'
function ProductCard({product}) {
  
     
  return (
    <NavLink  className= "productCard"style={{textDecoration:"none"}} to={`/detail/${product.id}`}>

    <div className='imageDiv'>
    <img className='img' src={product.Image} alt={product.description}></img>
   
    <div className='productText'>
    {product.featured === true?(
        <h1 className='featured'>Featured</h1>
    ):""
  }
    </div>
    </div>  
     <div className={`${product.featured===true? "productContent active":"productContent"}`}>
    
    <h4><span>Product category: {product.productName}</span>Price: {product.price}Pkr</h4>
    <p>Location: {product.Location}</p>
     </div>
  
  </NavLink>
  )

}

export default ProductCard;