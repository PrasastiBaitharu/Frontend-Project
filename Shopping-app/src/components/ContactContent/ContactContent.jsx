import { people } from "../../assets/asset";
import "./ContactContent.css";

export default function ContactContent() {
  return (
    <div>
      <div id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency location or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i class="bx bx-map-alt"></i>
              <p>56 Glassford Street Glasgow G1 1UL New York</p>
            </li>
            <li>
              <i class="bx bx-envelope"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i class="bx bxs-phone"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i class="bx bx-time"></i>
              <p>Monday to Saturday: 9.00am to 16.pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.6872164482324!2d-1.2570928233354643!3d51.75704287187115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1724263873233!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div id="form-details">
        <form action="">
            <span>LEAVE A MESSAGE </span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows='10' placeholder="Your Message"></textarea>
            <button type="submit" className="normal">Submit</button>
        </form>
        <div className="people">
            <div>
                <img src={people.people1} alt="" />
                <p><span>John Doe</span>Senior Marketing Officer <br/>phone: +000 123 000 77 88 <br/>Email: contact@example.com</p>
            </div>
            <div>
                <img src={people.people2} alt="" />
                <p><span>William Smith</span>Senior Marketing Officer <br/>phone: +000 123 000 77 88 <br/>Email: contact@example.com</p>
            </div>
            <div>
                <img src={people.people3} alt="" />
                <p><span>Emma Stone</span>Senior Marketing Officer <br/>phone: +000 123 000 77 88 <br/>Email: contact@example.com</p>
            </div>
        </div>
      </div>
    </div>
  );
}
