import axios from "axios";

const API_URL = "http://localhost:3000/productos/";

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  console.log("Productos obtenidos del backend:", response.data); 

  return response.data;
};