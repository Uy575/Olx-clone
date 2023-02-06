import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from '../../components/Form';
import ProductList from '../../components/Product-list';
import { useDispatch } from 'react-redux'
import { gettingApiData } from '../../Redux/ProductReducers';
import { gettingApiDataForSingleProduct } from '../../Redux/ProductReducers';
import ModalComp from '../../components/Modal';
import DetailCard from '../../components/DetailCard';

function DetailPage() {
 
  //creating detail page and relative products
   
    const {id} = useParams();
    const dispatch = useDispatch();
    
     
    //function for single product detail
    useEffect(()=>{
        
         dispatch(gettingApiDataForSingleProduct(`http://localhost:3001/products/${id}`))

     },[id])
      
     //function for relative products

     useEffect(()=>{

         dispatch(gettingApiData(`http://localhost:3001/products?id_ne=${id}&_sort=featured&_order=desc`))

     },[id])


  return (
    <>
     <Form/>
     <ModalComp />
    <div>
     <DetailCard/>
    </div>
    <h4 style={{textAlign:'center',marginTop:'2rem'}}>Related Products</h4>
    <div>
        <ProductList/>
    </div>
    </>
    
  )
}

export default DetailPage