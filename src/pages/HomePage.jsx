import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();

  const goToProducts = () => {
    const loggedIn = true;
    if (loggedIn) {
      navigate("/products");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="wrapper">      
      <button className="buy-btn" onClick={goToProducts}>Go to products page</button>
    </div>
  );
};

export default HomePage;