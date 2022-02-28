import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount/ItemCount";
import LoadingSpinner from "../components/LoadingSpinner/Spinner";
import { getFirestore } from "../firebase";
import { useCart } from "../context/CartContext";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { cart, addItem } = useCart();
  const [count, setCount] = useState(1);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("products");
    const selectedProduct = productsCollection.doc(productId);

    setIsLoading(true);
    selectedProduct
      .get()
      .then((res) => {
        if (!res.exists) console.log("El producto no existe");
        setProduct({ ...res.data(), id: res.id });
      })
      .catch((err) => setError(err))
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
        </div>

        <ItemCount initial={1}stock={product.stock} />
        <button className="buy-btn" onClick={handleClick}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
