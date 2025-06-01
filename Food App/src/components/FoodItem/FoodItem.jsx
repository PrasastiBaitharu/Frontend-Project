import { useContext, useState } from "react"
import { assets } from "../../assets/asset"
import "./foodItem.css"
import { StoreContext } from "../../context/StoreContext";

export default function FoodItem({id,name,price,description,image}){

    const{cartItems,addToCart,removeFromCart} = useContext(StoreContext);

    return(
        <div className="food-item">
            <div className="food-item-img-container">
                <img src={image} className="food-item-image" alt="" />
                {
                    !cartItems[id]?<img src={assets.add_icon_white} onClick={()=>addToCart(id)} className="add" />:
                    <div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} />
                        {cartItems[id]}
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)} />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_star} alt="" />
                </div>
                <p className="food-item-desc">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>
        </div>
    )
}