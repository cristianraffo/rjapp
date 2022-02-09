import Item from "../Item/Item";
import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner/Spinner";
import { getFirestore } from "../../firebase";

const ItemContainer = () => {
  const [products, setProduct] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("products");

    const getDataFromFirestore = async () => {
      setIsLoading(true);
      try {
        const response = await productsCollection.get();
        if (response.empty) {
          console.log("No hay productos");
        }
        setProduct(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getDataFromFirestore();
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
