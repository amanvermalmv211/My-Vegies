import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import MoreProducts from './components/products/MoreProducts';
import CartState from './context/cart/CartState';
import CartOrders from './components/usercart/CartOrders';
import { useState } from 'react';
import Details from './components/products/Details';
import MyPlan from './components/myplan/MyPlan';
import UserLogin from './components/profiles/UserLogin';

document.body.style.background = "rgb(227 219 182)";

function App() {
  const [isCart, setCart] = useState(0);
  return (
    <CartState setCart={setCart}>
      <Router>
        <Navbar isCart={isCart}/>

        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/cartorders" element={<CartOrders />}></Route>
          <Route exact path="/moreproducts" element={<MoreProducts />}></Route>
          <Route exact path="/proddetails" element={<Details/>}></Route>
          <Route exact path="/myplan" element={<MyPlan isCart={isCart}/>}></Route>
          <Route exact path="/userlogin" element={<UserLogin/>}></Route>
        </Routes>

      </Router>
    </CartState>
  );
}

export default App;