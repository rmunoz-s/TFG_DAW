import React from "react";
import Navigator from "../components/Navigator";
import ProductList from "../components/ProductList";

const ProductsPage = () => {
  return (
    
    <div className="products-page">
      <Navigator />

      <h1>Productos</h1>
      <ProductList />
    </div>
  );
};

export default ProductsPage;