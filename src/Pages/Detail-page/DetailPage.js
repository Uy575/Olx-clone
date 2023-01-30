import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddButton from '../../components/Buttons/AddAndSeachButton';
import ProductCard from '../../components/Product-card';
import ProductList from '../../components/Product-list';
import SearchItem from '../../components/Search-item';

function DetailPage() {
    const [product,setProduct] = useState({ })
    const [relatedProducts,setRelatedProducts] = useState([]);
    const {id} = useParams();
     
    useEffect(()=>{
        
        const fetchingProduct = async ( ) =>{
            fetch(`http://localhost:3001/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
            .catch(e => console.log(e))

         }
          
        fetchingProduct();
     },[id])
      

     useEffect(()=>{
        
        const filteringProduct = async ( ) =>{
            fetch(`http://localhost:3001/products?id_ne=${id}&_sort=featured&_order=desc`)
            .then(res => res.json())
            .then(json => setRelatedProducts(json))
            .catch(e => console.log(e))

         }
          
        filteringProduct();
     },[id])

    

       

  return (
    <>
    <SearchItem/>
    <AddButton buttonValue='+SELL YOUR ITEM'/>
    <div>
        <ProductCard product={product}/>
    </div>
    <h1>Related Products</h1>
    <div>
        <ProductList products={relatedProducts}/>
    </div>
    </>
    
  )
}

export default DetailPage