import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "./CartPage.css";
import { useState } from "react";
import { getFirestore } from "../firebase";

const CartPage = () => {
  const { cart, removeItem, clearCart, sumQuantity, subTotal, sumTotal } =
    useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Please complete your name and phone");
      return false;
    }

    const newOrder = {
      buyer: { name, phone },
      items: cart,
      total: sumTotal(cart).toFixed(2),
    };

    const db = getFirestore();
    db.collection("orders")
      .add(newOrder)
      .then((res) => {
        console.log("Compra realizada con exito", res.id);
        navigate(`/checkout/${res.id}`);
      })
      .catch((err) => console.log(err))
      .finally(() => clearCart());
  };

  return (
    <>
      {sumQuantity() > 0 ? (
        <>
          <div>
            {cart.map((purchase) => {
              return (
                <div className="subCart" key={purchase.id}>
                  <p>{purchase.name}</p>
                  <p>{purchase.description}</p>
                  <p>{purchase.quantity}</p>
                  <p>
                    ${subTotal(purchase.price, purchase.quantity).toFixed(2)}
                  </p>

                  <div>
                    <button
                      className="btn"
                      onClick={() => removeItem(purchase.id)}
                    >
                      x
                    </button>
                  </div>
                </div>
              );
            })}
            <p className="sumTotal">TOTAL: $ {sumTotal().toFixed(2)}</p>

            <form className="form" onSubmit={handleSubmit}>
              <h2 className="form-text mt-5">Enter your information:</h2>
              <div className="row mb-3">
                <div className="col-lg-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    className="form-control"
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="text-center">
                <input className="purchaseBtn" type="submit" value="Finish" />
                <button className="clearBtn m-2" onClick={clearCart}>
                  Clear cart
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className="text-center m-5">
          <p className="cartEmpty">Cart is empty!</p>
          <Link to="/">
            <input
              className="purchaseBtn"
              type="submit"
              value="Go back to the store"
            />
          </Link>
        </div>
      )}
    </>
  );
};

export default CartPage;
