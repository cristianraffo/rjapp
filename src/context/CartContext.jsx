import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((element) => element.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    Swal.fire("Cart is empty");
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
