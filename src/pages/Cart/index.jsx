import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { Stepper } from "../../components/Stepper";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

import { PiShoppingCartDuotone } from "react-icons/pi";

export function Cart() {
  const { cartItems, handleRemoveItem, handleUpdateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <BackButton />

      {cartItems.length > 0 ? (
        <>
          <h1>Meu Carrinho</h1>

          <div className="cartList">
            {cartItems.map((item) => (
              <div key={item.id} className="cartItem">
                <Link to={`/dish/${item.dish_id}`}>
                  <img
                    src={`${api.defaults.baseURL}/files/${item.image}`}
                    alt={item.title}
                  />
                </Link>

                <div className="details">
                  <Link to={`/dish/${item.dish_id}`}>
                    <h3>
                      {item.quantity} x {item.title}
                    </h3>
                  </Link>
                  <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>

                <div className="actions">
                  <Stepper
                    className="stepper"
                    quantity={item.quantity}
                    setQuantity={(newQuantity) =>
                      handleUpdateQuantity(item.id, newQuantity)
                    }
                  />
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="removeButton"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="summary">
            <h2>Total: R$ {totalPrice.toFixed(2)}</h2>
            <Button title="Comprar" className="buyButton" />
          </div>
        </>
      ) : (
        <div className="emptyCart">
          <PiShoppingCartDuotone />
          <p>O carrinho está vazio.</p>
        </div>
      )}
    </Container>
  );
}
