import { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "../hooks/toast.jsx";
import { api } from "../services/api";
import { useAuth } from "../hooks/auth";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const { showError, showSuccess } = useToast();
  const { token } = useAuth();
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
    if (token) {
      fetchCartItems();
    }
  }, [token]);

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

  async function handleUpdateQuantity(dish_id, quantity) {
    if (quantity < 1) {
      return;
    }

    try {
      await api.patch(`/cart/${dish_id}`, { quantity });
      fetchCartItems();
    } catch (error) {
      showError("Erro ao atualizar a quantidade do prato.");
    }
  }

  async function handleRemoveItem(dish_id) {
    try {
      await api.delete(`/cart/${dish_id}`);
      fetchCartItems();
      showSuccess("Item removido do carrinho.");
    } catch (error) {
      showError("Erro ao remover o prato do carrinho.");
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartItems,
        cartItems: cartItems,
        handleAddItem,
        handleUpdateQuantity,
        handleRemoveItem,
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
