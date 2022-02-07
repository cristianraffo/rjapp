import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-body">
        <img src={product.img} alt={product.name} className="card-img" />
        <h2 className="card-title">{product.name}</h2>
        <p className="card-description">{product.description}</p>
        <p className="card-price">Price: {product.price}</p>
      </div>
      <button
        className="card-btn"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        Details
      </button>
    </div>
  );
};

export default Item;
