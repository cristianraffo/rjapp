import "./CartWidget.css";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to="cart">
        <nav>
          <FaCartArrowDown className="cartIcon" />
        </nav>
      </Link>
    </>
  );
};

export default CartWidget;