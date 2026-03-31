import { Route, Routes } from "react-router-dom"
import 'boxicons/css/boxicons.min.css';
import Navbar from "./components/Navbar/Navbar"
import "./index.css"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import Newsletter from "./components/Newsletter/Newsletter";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
export default function App(){
  return(
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Newsletter/>
      <Footer/>
    </div>
  )
}