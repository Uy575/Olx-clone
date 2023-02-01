import React from 'react'

function Pagination({totalProducts,productsPerPage,setCurrentPage}) {
    let pages = [];
    const ratio = Math.ceil(totalProducts / productsPerPage)
    for(let i = 1; i<= ratio; i++){
        pages.push(i);
    }
 
    console.log(pages)

  return (
    <div>
        {
          pages.map((page,i)=>{
            //   <div>hello</div>
               return <button key={i} onClick={()=> setCurrentPage(page)}>{page}</button>
          })

       }
    </div>
  )
}

export default Pagination;