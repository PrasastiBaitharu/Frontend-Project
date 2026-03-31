import { assets, featureProduct, newArrival } from "../../assets/asset";
import "./ShopProduct.css";

export default function ShopProduct() {
  return (
    <div id="product1">
      <div className="pro-container">
        {featureProduct.map((item, index) => {
          return (
            <div className="pro">
              <img src={item.image} alt="" />
              <div className="des">
                <span>{item.brand}</span>
                <h5>{item.Name}</h5>
                <div className="star">
                  <img src={assets.rating_stars} alt="" />
                </div>
                <h4>${item.price}</h4>
              </div>
              <a href="#">
                <img src={assets.cart} className="cart" />
              </a>
            </div>
          );
        })}
        {newArrival.map((item, index) => {
          return (
            <div className="pro">
              <img src={item.image} alt="" />
              <div className="des">
                <span>{item.brand}</span>
                <h5>{item.Name}</h5>
                <div className="star">
                  <img src={assets.rating_stars} alt="" />
                </div>
                <h4>${item.price}</h4>
              </div>
              <a href="#">
                <img src={assets.cart} className="cart" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
