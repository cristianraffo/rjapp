import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeItem, clearCart } = useCart();

  return (
    <div>
      {cart.map((purchase) => {
        return (
          <div className='wrapper' key={purchase.id}>         
            <p>{purchase.name}</p>
            <p>Quantity: {purchase.quantity}</p>
            <p>Price: {purchase.price}</p>
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
    </div>
  );
};

export default CartPage;
