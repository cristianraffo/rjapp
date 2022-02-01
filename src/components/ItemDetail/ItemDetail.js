import { products } from "../../db";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = () => {
  return (
    <>
      {products.map((item) => {
        return (
          <div className="card">
            <div className="card-body">
              <img
                src="https://picsum.photos/200/300"
                className="card-img"
                alt={item.name}
              />
              <h2 className="card-title"> {item.name}</h2>
              <p className="card-stock">Stock: {item.stock}</p>
              <p className="card-color">
                Color:
                <select>
                  <option>Red</option>
                  <option>Green</option>
                  <option>Black</option>
                </select>
              </p>
              <p className="card-price">Price: $ {item.price}</p>
              <p className="card-long">{item.longDescription}</p>
            </div>
            <ItemCount />
            <button className="buy-btn">Buy</button>
          </div>
        );
      })}
    </>
  );
};

export default ItemDetail;
