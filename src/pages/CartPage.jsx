import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeItem, clearCart, sumQuantity, subTotal, sumTotal } =
    useCart();

  return (
    <>
      {sumQuantity() > 0 ? (
        <>
          <div>
            {cart.map((purchase) => {
              return (
                <div className="wrapper" key={purchase.id}>
                  <p>{purchase.name}</p>
                  <p>{purchase.description}</p>
                  <p>Quantity: {purchase.quantity}</p>
                  <p>$ { subTotal(purchase.price, purchase.quantity).toFixed(2) }</p>
                  <button
                    className="card-btn"
                    onClick={() => removeItem(purchase.id)}
                  >
                    Remove item
                  </button>                  
                </div>          
              );
            })}
            <button className="card-btn" onClick={clearCart}>
              Clear cart
            </button>
            <p className="sumTotal">TOTAL: $ {sumTotal().toFixed(2)}</p>
          </div>
          );
        </>
      ) : (
        <div className="text-center m-5">
          <p className="cartEmpty">Cart is empty!</p>
          <Link to="/">
            <Button variant="info">Go to store</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartPage;
