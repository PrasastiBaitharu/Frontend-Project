import {assets} from "../../assets/asset"
import "./footer.css"
export default function Footer(){
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rem enim, neque officia dolorum ex harum! Reiciendis laboriosam explicabo quaerat, adipisci voluptatum rerum iusto unde? Mollitia impedit similique animi reprehenderit.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>                
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 ©️Tomato.com - All Right Reserved.
            </p>
        </div>
    )
}