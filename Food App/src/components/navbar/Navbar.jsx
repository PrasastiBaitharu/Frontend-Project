import "./navbar.css";
import { assets } from "../../assets/asset";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
export default function Navbar({setShowLogin}) {
    const[menu,setMenu] = useState("home")
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className="navbar">
      <Link to="/"><img src={assets.logo} className="logo"/></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={()=>setMenu("mobileApp")} className={menu === "mobileApp" ? "active" : ""}>Mobile App</a>
        <a href="#footer" onClick={()=>setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>{setShowLogin(true)}}>Sign In</button>
      </div>
    </div>
  );
}
