import { useState, useEffect } from "react";
import { fetchCartItems, incrementItem, decrementItem, removeItem } from "../services/carritoService";

export const useCarrito = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const data = await fetchCartItems(token);
        const items = data.items || [];
        setCartItems(items);

        const initialSelected = {};
        items.forEach(item => {
          initialSelected[item.producto._id] = true;
        });
        setSelectedItems(initialSelected);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCartItems();
  }, [token]);

  const handleCheckboxChange = (productId) => {
    setSelectedItems(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleIncrement = async (productId, currentQuantity) => {
    if (currentQuantity >= 10) return;

    try {
      const responseData = await incrementItem(token, productId);
      const updatedItem = responseData.items.find(
        item => item.producto._id === productId
      );

      if (updatedItem) {
        setCartItems(prevItems =>
          prevItems.map(item =>
            item.producto._id === productId
              ? { ...item, cantidad: updatedItem.cantidad }
              : item
          )
        );
      }
    } catch (error) {
      console.error("Error incrementando cantidad:", error);
      alert(error.message || "Error al aumentar la cantidad");
    }
  };

  const handleDecrement = async (productId, currentQuantity) => {
    if (currentQuantity <= 1) return;

    try {
      const responseData = await decrementItem(token, productId);
      const updatedItem = responseData.items.find(
        item => item.producto._id === productId
      );

      if (updatedItem) {
        setCartItems(prevItems =>
          prevItems.map(item =>
            item.producto._id === productId
              ? { ...item, cantidad: updatedItem.cantidad }
              : item
          )
        );
      }
    } catch (error) {
      console.error("Error disminuyendo cantidad:", error);
      alert(error.message || "Error al disminuir la cantidad");
    }
  };

  const handleRemove = async (productId) => {
    try {
      await removeItem(token, productId);
      setCartItems(prevItems => prevItems.filter(item => item.producto._id !== productId));

      setSelectedItems(prev => {
        const newSelected = { ...prev };
        delete newSelected[productId];
        return newSelected;
      });
    } catch (error) {
      console.error("Error eliminando producto:", error);
      alert("Error al eliminar el producto del carrito");
    }
  };

  const calculateSubtotal = () => {
    return cartItems
      .filter(item => selectedItems[item.producto._id])
      .reduce((total, item) => total + item.producto.price * item.cantidad, 0)
      .toFixed(2);
  };

  const countSelectedItems = () => {
    return cartItems.filter(item => selectedItems[item.producto._id]).length;
  };

  return {
    cartItems,
    selectedItems,
    loading,
    handleCheckboxChange,
    handleIncrement,
    handleDecrement,
    handleRemove,
    calculateSubtotal,
    countSelectedItems
  };
};
