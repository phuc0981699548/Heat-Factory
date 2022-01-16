import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductViewModal from "./components/ProductViewModal";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="max-w-7xl mx-auto container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:slug" element={<Product />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
      <ProductViewModal />
    </BrowserRouter>
  );
}

export default App;
