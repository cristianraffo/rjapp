import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();

  const goToProducts = () => {
    const logueado = true;
    if (logueado) {
      navigate("/products");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={goToProducts}>Go to products page</button>
    </div>
  );
};

export default HomePage;
