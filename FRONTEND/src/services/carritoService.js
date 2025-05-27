const API_URL = "http://localhost:3000/carrito";

export const fetchCartItems = async (token) => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error al cargar el carrito");
  }

  return response.json();
};

export const incrementItem = async (token, productId) => {
  const response = await fetch(`${API_URL}/agregar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productoId: productId, cantidad: 1 }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Error al actualizar cantidad");
  }

  return response.json();
};

export const decrementItem = async (token, productId) => {
  const response = await fetch(`${API_URL}/disminuir`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productoId: productId }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Error al disminuir la cantidad");
  }

  return response.json();
};

export const removeItem = async (token, productId) => {
  const response = await fetch(`${API_URL}/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error al eliminar producto");
  }

  return response.json();
};

 export const vaciarCarrito = async (token) => {
    const response = await fetch(`${API_URL}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error("Error vaciar carrito");
      }
      
      return response.json();
  };