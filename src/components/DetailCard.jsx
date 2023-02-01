import React, { useState } from 'react'
import { useSelector } from 'react-redux'
function DetailCard() {
    const singleProductState = useSelector((state)=> state.product);
    const {singleProduct} = singleProductState;

    const [toggleContactNumber,setToggleContactNumber] = useState(true)
    
  return (
    <div className= 'productCard'>    
    <span><img className='img' src={singleProduct.Image} alt={singleProduct.description}></img></span>
    <div className='container'>
    {singleProduct.featured === true?(
        <h1 className='featured'>featured</h1>
    ):""
  }
    <h3>Name: {singleProduct.productName}</h3>
    <h4>Price: {singleProduct.price}Pkr</h4>
    <p>Location: {singleProduct.Location}</p>

    {toggleContactNumber === true?(
        <p>User Contact Number: ****-******<button onClick={()=> setToggleContactNumber(false)}>Show Number</button> </p>

    ):  
    <p>User Contact Number : {singleProduct.UserContact} 
    </p> 
    
} 
    <p>Detail Description: {singleProduct.DetailDescription}</p>
    <p>Seller Name: {singleProduct.SellerName}</p>
    <p>Product Condition: {singleProduct.ProductCondition}</p>
    <p>Description: {singleProduct.description}</p>
    </div>
   </div>
  )
}

export default DetailCard