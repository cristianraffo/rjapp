import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner/Spinner";
import { getProducts } from "../../db";

const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((res) => setDetails(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="wrapper">
        {loading ? <LoadingSpinner /> : <ItemDetail key={details.id} />}
      </div>
    </>
  );
};

export default ItemDetailContainer;
