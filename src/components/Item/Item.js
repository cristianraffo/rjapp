import { useNavigate } from "react-router-dom";
import "./Item.css";
import { products } from "../../db";

const Item = () => {
  const navigate = useNavigate();

  return (
    <>
      {products.map((item) => {
        return (
          <div  className="card">
            <div className="card-body">
              <img src="https://picsum.photos/200/300" className="card-img" />
              <h2 className="card-title">{item.name}</h2>
              <p className="card-description">{item.description}</p>
              <p className="card-price">Price: {item.price}</p>
            </div>
            <button
              className="card-btn"
              onClick={() => navigate(`/item/${item.id}`)}
            >
              Details
            </button>
          </div>
        );
      })}
    </>
  );
};
export default Item;
