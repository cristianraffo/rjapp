import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="products">
              <Route index element={<ProductsPage />} />
              <Route path=":productId" element={<ProductDetailPage />} />
            </Route>
            <Route path="contact" element={<ContactPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout/:orderId" element={<CheckoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}


export default App;
