import "./newArrival.css"
import { assets,  newArrival } from "../../assets/asset"
import "boxicons"

export default function NewArrival(){
    return(
        <div className="section-p1" id="product1">
            <h2>New Arrivals</h2>
            <p id="para">Summer Collection New Modern Design</p>
            <div className="pro-container">
                {
                    newArrival.map((item,index)=>{
                        return(
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
                                <a href="#"><img src={assets.cart} className="cart"/></a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}