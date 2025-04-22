import "./feature.css";
import { feature } from "../../assets/asset";
export default function Feature(){
    return(
        <div className="feature section-p1">
            {
                feature.map((item)=>{
                    return(
                        <div className="fe-box">
                            <img src={item.image} alt="" />
                            <h6>{item.title}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}