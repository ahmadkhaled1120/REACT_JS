import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => {
  useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existed = prev.find((cartItem) => cartItem.id === item.id);

      if (existed) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};