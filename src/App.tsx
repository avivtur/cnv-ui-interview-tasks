import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import AppLayout from "./components/Layout";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
