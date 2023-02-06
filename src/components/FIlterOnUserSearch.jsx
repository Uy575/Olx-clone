import React from "react";
import ProductCard from "./Product-card";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

//function for user search
function FilterSearch() {
  //extracting products and user search value from redux
  const productState = useSelector((state) => state.product);
  const { products, userSearchValue } = productState;

  //holding products as initial value
  const [filterProducts, setFilterProducts] = useState(products);

  //mapping on product we got from redux
  const ProductsMapping = products.map((product) => {
    return product;
  });

  //filtering on each product and setting filter value which matches with user search value
  useEffect(() => {
    const filterValue = ProductsMapping.filter((filteredProduct) => {
      return filteredProduct.productName
        .toLocaleLowerCase()
        .includes(userSearchValue.trim());
    });

    //setting filter product
    setFilterProducts(filterValue);
  }, [userSearchValue, ProductsMapping]);

  return (
    <>
      <div className="mainContainer">
        {filterProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default FilterSearch;
