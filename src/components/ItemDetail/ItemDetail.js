import { products } from "../../db";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (details) => {
  return (
    <>
      {products.map((det) => {
        return (
          <div className="card">
            <div className="card-body">
              <img src="https://picsum.photos/200/300" className="card-img" />
              <h2 className="card-title">{det.name}</h2>
              <p className="card-stock">Stock: {det.stock}</p>
              <p className="card-color">
                Color:
                <select>
                  <option>Red</option>
                  <option>Green</option>
                  <option>Black</option>
                </select>
              </p>
              <p className="card-price">Price: $ {det.price}</p>
              <p className="card-long">{det.longDescription}</p>
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
