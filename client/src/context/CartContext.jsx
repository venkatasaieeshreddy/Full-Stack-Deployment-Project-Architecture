import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const CartContext = createContext();

export const CartProvider = ({
  children,
}) => {
  const [cart, setCart] = useState([]);

  const [loading, setLoading] =
    useState(false);

  // Load Cart
  const getCart = async () => {
    try {
      setLoading(true);

      const { data } = await API.get(
        "/cart"
      );

      if (data.cart) {
        setCart(data.cart.items);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Add Item
  const addToCart = async (
    product,
    quantity = 1
  ) => {
    try {
      await API.post("/cart", {
        product,
        quantity,
      });

      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  // Remove Item
  const removeFromCart = async (
    productId
  ) => {
    try {
      await API.delete(
        `/cart/${productId}`
      );

      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCart();
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        getCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () =>
  useContext(CartContext);