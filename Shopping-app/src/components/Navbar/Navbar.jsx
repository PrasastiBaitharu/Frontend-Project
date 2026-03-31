import { useState } from "react";
import { assets } from "../../assets/asset";
import "./navbar.css";
import "boxicons"
import { Link } from "react-router-dom";
export default function Navbar(){
    const [menu,setMenu] = useState("home")
    return(
        <div className="navbar">
            <img src={assets.logo} alt="" />
            <ul className="navbar-menu">
                <Link to="/"><li onClick={()=>setMenu("home")} className={menu==="home"?"active" : ""}>Home</li></Link>
                <Link to="/shop"><li onClick={()=>setMenu("shop")} className={menu==="shop"?"active" : ""}>Shop</li></Link>
                <Link to="/blog"><li onClick={()=>setMenu("blog")} className={menu==="blog"?"active" : ""}>Blog</li></Link>
                <Link to="/about"><li onClick={()=>setMenu("about")} className={menu==="about"?"active" : ""}>About</li></Link>
                <Link to="/contact"><li onClick={()=>setMenu("contact")} className={menu==="contact"?"active" : ""}>Contact</li></Link>
                <Link to="/cart"><li onClick={()=>setMenu("cart")} className={menu==="cart"?"active" : ""}><box-icon name='shopping-bag'></box-icon></li></Link>                
            </ul>
        </div>
    )
}