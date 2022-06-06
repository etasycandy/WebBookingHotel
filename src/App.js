import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
