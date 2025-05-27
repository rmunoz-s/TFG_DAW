import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../features/auth/products/productService.js";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    // Estado para filtros
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // cambios en los filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  useEffect(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }

    if (filters.minPrice !== "") {
      const min = parseFloat(filters.minPrice);
      result = result.filter(product => product.price >= min);
    }    
    if (filters.maxPrice !== "") {
      const max = parseFloat(filters.maxPrice);
      result = result.filter(product => product.price <= max);
    }

    setFilteredProducts(result);
  }, [filters, products]);
  const clearFilters = () => {
    setFilters({
      category: "",
      minPrice: "",
      maxPrice: "",
    });
  };

  if (loading) {
    return <p className="text-center text-white">Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className="text-center text-white">No hay productos disponibles.</p>;
  }
  return (
    <div className="flex gap-5 mt-20 px-60 bg-neutral-950 text-white mb-20 ">      
      <div className="border-2 border-lime-600 rounded-lg p-5 bg-neutral-800 h-[10%] w-auto max-w-xs flex-shrink-0">
        <h3 className="text-green-500 text-center font-bold mb-4">Filtros</h3>
        
        {/* categoría */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Categoría</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="w-full p-2 rounded bg-neutral-700 text-white border border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            <option value="">Todas las categorías</option>
            <option value="interior">Interior</option>
            <option value="exterior">Exterior</option>
            <option value="jardinería">Jardinería</option>
            <option value="smart">Smart</option>
          </select>
        </div>
        
        {/*  precio mínimo */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Precio mínimo</label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
            placeholder="Mínimo $"
            min="0"
            className="w-full p-2 rounded bg-neutral-700 text-white border border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>
        
        {/* precio máximo */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Precio máximo</label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            placeholder="Máximo $"
            min="0"
            className="w-full p-2 rounded bg-neutral-700 text-white border border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>
        
        <button
          onClick={clearFilters}
          className="w-full bg-lime-600 text-black py-2 px-4 rounded hover:bg-lime-700 transition-colors mt-4"
        >
          Limpiar filtros
        </button>
        
        <p className="mt-4 text-center text-sm">
          {filteredProducts.length} producto(s) encontrado(s)
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-grow ml-5">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;