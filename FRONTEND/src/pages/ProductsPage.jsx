import React from "react";
import Navigator from "../components/Navigator";
import ProductList from "../components/ProductList";
import "../components/BannerProducts"
import BannerProducts from "../components/BannerProducts";
import Footer from "../components/Footer";

const ProductsPage = () => {
  return (
    
    <div className="products-page bg-stone-950">
      <Navigator />
      <BannerProducts />

      <ProductList />

      < Footer/>
    </div>
  );
};

export default ProductsPage;