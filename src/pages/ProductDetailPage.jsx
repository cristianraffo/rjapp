import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount/ItemCount";
import LoadingSpinner from "../components/LoadingSpinner/Spinner";
import { useCart } from "../context/CartContext";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { cart, addItem } = useCart();
  const [count, setCount] = useState(1);

  useEffect(() => {
    const URL = `http://localhost:3001/products/${productId}`;
    setIsLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setIsLoading(false));
  }, [productId]);

  const handleClick = () => {
    addItem(product, count);
  };

  if (isLoading || !product) return <LoadingSpinner />;
  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <img className="card-img" src={product.img} alt={product.name} />
          <p className="card-long">{product.longDescription}</p>
          <p className="card-price">Price: ${product.price}</p>
          <p className="card-stock">Stock: {product.stock}</p>
          <p className="card-color">
            Color:
            <select>
              <option>Red</option>
              <option>Green</option>
              <option>Black</option>
            </select>
          </p>
        </div>

        <ItemCount count={count} setCount={setCount}/>
        <button className="buy-btn" onClick={handleClick}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
