import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exists = cartItems.find(i => i.title === item.title);
    if (exists) {
      setCartItems(cartItems.map(i =>
        i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const increaseQty = (title) => {
    setCartItems(cartItems.map(i =>
      i.title === title ? { ...i, quantity: i.quantity + 1 } : i
    ));
  };

  const decreaseQty = (title) => {
    setCartItems(cartItems.map(i =>
      i.title === title ? { ...i, quantity: i.quantity > 1 ? i.quantity - 1 : 1 } : i
    ));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);