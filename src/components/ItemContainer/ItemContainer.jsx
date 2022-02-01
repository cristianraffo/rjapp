import Item from "../Item/Item";
import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner/Spinner";

const URL = "http://localhost:3000/products";

const ItemContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    return <p>ERROR: {error.message}</p>;
  } else
    return (
      <div>
        <ul className="wrapper">
          {products.map((product) => {
            return <Item key={product.id} product={product} />;
          })}
        </ul>
      </div>
    );
};

export default ItemContainer;
