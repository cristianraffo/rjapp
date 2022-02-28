import { useState } from "react";
import { useContext } from "react";
import { useCart } from "../../context/CartContext";
import "./ItemCount.css";

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    count < stock ? setCount((prev) => prev + 1) : setCount(stock);
  };

  const decrease = () => {
    count === 1 ? setCount(1) : setCount((prev) => prev - 1);
  };

  return (
    <>
      <div className="counter-container">
        <button onClick={decrease} className="btn-counter">
          -
        </button>
        <p className="count">Qty: {count}</p>
        <button onClick={increase} className="btn-counter">
          +
        </button>
      </div>
    </>
  );
}

export default ItemCount;
