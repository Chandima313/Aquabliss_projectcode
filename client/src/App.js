import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/ProductDetails" element={<ProductDetails/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
