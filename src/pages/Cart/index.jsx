import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { Stepper } from "../../components/Stepper";
import { Button } from "../../components/Button";

export function Cart() {
  const { cartItems, handleRemoveItem, handleUpdateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <h1>Meu Carrinho</h1>

      <div className="cart-list">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <Link to={`/dish/${item.dish_id}`} className="image-link">
                <img
                  src={`${api.defaults.baseURL}/files/${item.image}`}
                  alt={item.title}
                />
              </Link>

              <div className="details">
                <Link to={`/dish/${item.dish_id}`} className="title-link">
                  <h3>
                    {item.quantity} x {item.title}
                  </h3>
                </Link>

                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>

                <div className="actions">
                  <Stepper
                    quantity={item.quantity}
                    setQuantity={(newQuantity) =>
                      handleUpdateQuantity(item.id, newQuantity)
                    }
                  />
                  <Button
                    title="Remover"
                    onClick={() => handleRemoveItem(item.id)}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </div>

      <div className="summary">
        <h2>Total: R$ {totalPrice.toFixed(2)}</h2>
        <Button title="Comprar" className="payment-button" />
      </div>
    </Container>
  );
}
