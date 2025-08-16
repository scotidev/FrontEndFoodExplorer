import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";

import { Container } from "./styles";

export function Cart() {
  const { cartItems } = useCart();

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
              <img
                src={`${api.defaults.baseURL}/files/${item.image}`}
                alt={item.title}
              />
              <div className="details">
                <h3>
                  {item.quantity} x {item.title}
                </h3>
                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </div>

      <div className="summary">
        <h2>Total: R$ {totalPrice.toFixed(2)}</h2>
        <button className="payment-button">Avançar</button>
      </div>
    </Container>
  );
}
