import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemContainer from "./components/ItemContainer/ItemContainer";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import VisionPage from "./pages/VisionPage";
import MisionPage from "./pages/MisionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />}>
            <Route path="vision" element={<VisionPage />} />
            <Route path="mision" element={<MisionPage />} />
          </Route>
          <Route path="products">
            <Route index element={<ProductsPage />} />
            <Route path=":productId" element={<ProductDetailPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
