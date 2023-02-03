import React from 'react'
import './Pagination.css'
function Pagination({totalProducts,productsPerPage,setCurrentPage,currentPage}) {
    let pages = [];
    const ratio = Math.ceil(totalProducts / productsPerPage)
    for(let i = 1; i<= ratio; i++){
        pages.push(i);
    }


  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
        {
          pages.map((page,i)=>{
             
               return   <button className={`${page === currentPage? "pagination active":"pagination"}`}  key={i} onClick={()=> setCurrentPage(page)} >{page}</button> 
          
          })

       }
    </div>
  )
}

export default Pagination;