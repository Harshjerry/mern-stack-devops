import Home from "./pages/home";
import ProductList from "./pages/productlist";
import Product from "./pages/product";
import Register from "./pages/register";
import Login from "./pages/login";
import Cart from "./pages/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useSelector} from "react-redux";

function App() {
  const user=useSelector((state)=>state.user.currentUser);
  return (
    <Router>
         <Routes>
         <Route path ="/" element={<Home/>} > </Route>
            <Route path="/register" element={user ? <Home/> : <Register />} ></Route>
            <Route path="/login" element={user ? <Home/> : <Login/>} ></Route>
           <Route path="/cart" exact element={<Cart/>}></Route>
           <Route path="/product/:id" exact element={<Product/>}></Route>
           <Route path="/products/:category" exact element={<ProductList/>}></Route>

         </Routes>
       </Router>
  );
}

export default App;
