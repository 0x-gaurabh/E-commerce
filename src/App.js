import "./App.css";
import { useContext, useState } from "react";
import { ProductContext } from "./context/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Men from "./components/Men";
import Women from "./components/Women";
import Electronic from "./components/Electronic";
import Jewelery from "./components/Jewelery";
import Footer from "./components/Footer";
import SearchItem from "./components/SearchItem";
import Cart from "./page/Cart";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const product = useContext(ProductContext);
  const [cart, setcart] = useState([]);

  // console.log(product);
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
      />
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<Product setcart={setcart} cart={cart} product={product} />}
        />
        <Route path="/men" element={<Men product={product} />} />
        <Route path="/women" element={<Women product={product} />} />
        <Route path="/electronic" element={<Electronic product={product} />} />
        <Route path="/jewelery" element={<Jewelery product={product} />} />
        <Route path="/cart" element={<Cart cart={cart} setcart={setcart} product={product} />} />

        <Route
          path="/product/:id"
          element={<ProductDetail cart={cart} setcart={setcart} product={product} />}
        />
        <Route
          path="/search/:term"
          element={<SearchItem cart={cart} setcart={setcart} product={product} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
