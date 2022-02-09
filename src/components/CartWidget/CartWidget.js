import "./CartWidget.css";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useCart } from "../../context/CartContext";




const CartWidget = () => {
  const { sumQuantity } = useCart();
  return (
    <>
      <Link to="cart">
        <nav>
          <FaCartArrowDown className="cartIcon" />
        </nav>
      </Link>
      {sumQuantity() === 0 ? null : (
        <Badge className="badgeCart" bg="warning">
          {sumQuantity()}
        </Badge>
      )}
    </>
  );
};


export default CartWidget;
