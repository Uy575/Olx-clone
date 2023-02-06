import React from "react";
import ProductCard from "./Product-card";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "./Pagination";
import "./Pagination.css";
function ProductList() {
  //creating list for products
  const productState = useSelector((state) => state.product);
  const { products } = productState;
  const [currentPage, setCurrentPage] = useState(1); //for current page
  const [productPerPage] = useState(8); //for products per page

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  return (
    <>
      <div className="mainContainer">
        {currentProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <div className="center">
        <Pagination
          totalProducts={products.length}
          productsPerPage={productPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default ProductList;
