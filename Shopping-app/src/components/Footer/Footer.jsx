import { assets } from "../../assets/asset";
import "./Footer.css"
export default function Footer() {
  return (
    <div>
      <div className="section-p1 footer">
      <div className="col">
        <img src={assets.logo} alt="logo" class="logo" />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> 562 Wellington Road , Street 32 , San
          Francisco
        </p>
        <p>
          <strong>Phone:</strong>+01 2222 365 /(+91) 012345 6789
        </p>
        <p>
          <strong>Hours:</strong> 10:00 - 18:00, Mon- Sat
        </p>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-pinterest-alt"></i>
            <i className="bx bxl-youtube"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
            <img src={assets.app} alt="" />
            <img src={assets.play} alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={assets.pay} alt=""></img>
      </div>
    </div>
    <div class="copyright">
        <p>© 2021, Tech2 etc - HTML CSS Ecommerce Template</p>
      </div>
    </div>
  );
}

      