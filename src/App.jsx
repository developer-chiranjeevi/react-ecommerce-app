import {Routes,Route} from "react-router-dom";
import './App.css'
import Home from "./routes/Home.jsx";
import SignUp from "./routes/SignUp.jsx";
import Cart from "./routes/Cart.jsx";



function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
