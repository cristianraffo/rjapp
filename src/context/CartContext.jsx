import { createContext, useContext, useEffect, useState } from "react";
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
  };


  const sumQuantity = () => {
    let sum = 0;
    cart.forEach((order) => {
      sum += order.quantity;
    });
    return sum;
  };

  const subTotal = (price, quantity) => {
    return price * quantity;
  };

  const sumTotal = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.quantity * item.price;
    });
    return sum;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        sumQuantity,
        subTotal,
        sumTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

// const addItem = (product) => {
//   if (cart.find((item) => item.id === product.id)) {
//     setCart(
//       cart.map((item) =>
//         item.id === product.id
//           ? {
//               ...item,
//               quantity: item.quantity + product.quantity,
//             }
//           : item
//       )
//     );
//   } else {
//     setCart([...cart, product]);
//   }
// };
