import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../features/auth/products/productService.js";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className="text-center text-white">No hay productos disponibles.</p>;
  }

  return (
    <div className="flex gap-5 mt-20 px-60 bg-neutral-950 text-white ">
      <div className="w-1/4 border-2 border-lime-600 rounded-lg p-5 bg-neutral-800">
        <h3 className="text-green-500 text-center font-bold mb-4">Filtros</h3>
        {/* Aquí puedes agregar filtros */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 ml-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;