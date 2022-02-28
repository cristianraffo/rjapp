import * as React from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = React.useState({});

  React.useEffect(() => {
    const db = getFirestore();
    db.collection("orders")
      .doc(orderId)
      .get()
      .then((res) => setOrder({ id: res.id, ...res.data() }));
  }, [orderId]);

  if (!order.id) {
    return <p>Loading...</p>;
  }

  return (
    <div className="checkout">
      <h1>Thank you for your purchase!</h1>
      <h2>Detail:</h2>
      <p>Name: {order.buyer.name}</p>
      <p>Phone: {order.buyer.phone}</p>
      <p>Total: ${order.total}</p>
    </div>
  );
};

export default CheckoutPage;
