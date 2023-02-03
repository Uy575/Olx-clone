import React from 'react'
import ProductCard from './Product-card'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react';
import Pagination from './Pagination';
import './Pagination.css'
function ProductList() {
  const productState = useSelector((state)=>state.product)
  const {products,userSearchValue} = productState;
  const [filterProducts,setFilterProducts] = useState(products);

  const [currentPage,setCurrentPage] = useState(1);
  const [productPerPage] = useState(8)


  
  // const ProductsMapping = products.map((product)=>{
  //   return product
  // })
   
  // useEffect(()=>{
  //   const filterValue = currentProducts.filter((filteredProduct)=>{
  //     return filteredProduct.productName.includes(userSearchValue)
      
  //   })

  //   setFilterProducts(filterValue);
    
  // },[userSearchValue,products])

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProducts = products.slice(firstProductIndex,lastProductIndex); 

  return (
     <>
    <div className='mainContainer'>
    {
        currentProducts.map(product =>{
            return <ProductCard key={product.id} product={product}/>
        })
    }


    </div>
    <div className='center'>
         
     <Pagination  totalProducts={products.length} productsPerPage = {productPerPage} setCurrentPage={setCurrentPage} currentPage = {currentPage}/>
      
    </div>
     </>
  )
}

export default ProductList;