import { useState, useEffect } from "react";
import { getProducts } from "../../db";
import Item from "../Item/Item";
import LoadingSpinner from "../LoadingSpinner/Spinner";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => setProducts(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        products.map((product) => (
          <Item
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))
      )}
    </>
  );
};

export default ItemListContainer;
