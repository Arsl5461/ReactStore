import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel"
import Contact from "./components/Contact"
import About from "./components/About"
import { Routes,Route } from "react-router-dom/dist";
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail";


function App() {
  return (
    <>
<Navbar/>
<Routes>
  <Route path="/" element={<Carousel/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/products" element={<Products/>}></Route>
  <Route path="/products/:id" element={<ProductDetail/>}></Route>


</Routes>
    </>
  );
}

export default App;
