import { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "../hooks/toast.jsx";
import { api } from "../services/api";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const { showError } = useToast();
  const [cartItems, setCartItems] = useState([]);

  async function fetchCartItems() {
    try {
      const response = await api.get("/cart");
      setCartItems(response.data);
    } catch (error) {
      showError("Erro ao buscar itens do carrinho.");
    }
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  async function handleAddItem(dish_id, quantity) {
    try {
      await api.post("/cart", {
        dish_id,
        quantity,
      });
      fetchCartItems();
    } catch (error) {
      showError("Erro ao adicionar o prato ao carrinho.");
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
