import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ count, setCount }) {
  const increase = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrease = () => {
    if (count === 1) {
      return;
    } else {
      setCount((prevState) => prevState - 1);
    }
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
