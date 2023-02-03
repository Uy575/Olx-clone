import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './DetailCard.css'
function DetailCard() {
    const singleProductState = useSelector((state)=> state.product);
    const {singleProduct} = singleProductState;

    const [toggleContactNumber,setToggleContactNumber] = useState(true)

    const toggle = (value)=>{
      setToggleContactNumber(!value)
    }

    
  return (
<>
      <div className='mainContainer'>

        <div className='imageContainer'>
        <img className='img' src={singleProduct.Image} alt={singleProduct.description}></img>
        </div> 
        <div className='detailFeaturedText'>
    {singleProduct.featured === true?(
      <h1 className='detailFeatured'>Featured</h1>
    ):""
  }
    </div>

     <div>
    
        <div className= 'detailProductContent'>
        <h4><span>ProductName: {singleProduct.productName}</span>
         Price: {singleProduct.price}Pkr</h4>
        <p>Location: {singleProduct.Location}</p>
        </div>
        <div style={{marginTop:'2rem'}} className='detailProductContent'>
           <h4><span>Seller Name : {singleProduct.SellerName}</span>
           </h4>
           { 

              toggleContactNumber === true?(
                <div>Seller Contact Number: ****-******<button onClick={()=>{setToggleContactNumber(toggle)}}>Show Number</button></div>
                ):  
                <div>Seller Contact Number : {singleProduct.UserContact}</div> 
 }
          
  
        </div>
        </div>
     
      </div>
      <div style={{border:'2px solid grey',width:'30rem ',marginLeft:'1rem',backgroundColor:'white'}}> Product Condition: {singleProduct.ProductCondition} </div>
        <br/>     
       <div style={{border:'2px solid grey',width:'30rem',marginLeft:'1rem',backgroundColor:'white'}}>
               Description : {singleProduct.DetailDescription}
       </div>
      </>
  )
}

export default DetailCard