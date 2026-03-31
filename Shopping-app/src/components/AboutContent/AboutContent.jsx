import { about } from "../../assets/asset";
import "./AboutContent.css";

export default function AboutContent() {
  return (
    <div>
      <div id="about-head" className="section-p1">
        <img src={about.a6} alt="" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            optio assumenda similique, saepe obcaecati voluptate veniam
            laudantium distinctio impedit neque quia rerum sunt inventore
            doloremque, sit blanditiis, magnam ex. Iste!Doloremque eveniet
            cupiditate inventore natus minus necessitatibus laboriosam tempora.
            Accusamus nemo officia distinctio, eos illo ad atque. Maxime
            consequuntur repellendus omnis quidem. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptatibus repudiandae beatae
            placeat minus cupiditate? Asperiores, quae! Officiis repellat libero
            adipisci dicta illo magni perspiciatis consequuntur debitis
            distinctio cum. Quod, eius!
          </p>
          <abbr title="">
            Create a stunning images with as much or as little control as you
            like thanks to a choice of Basic and Creative modes.
          </abbr>
          <br />
          <br />
          <marquee width="100%" bgcolor="#ccc" loop="-1" scrollamount="5">
            Create a stunning images with as much or as little control as you
            like thanks to a choice of Basic and Creative modes.
          </marquee>
        </div>
      </div>

      <div id="about-app" className="section-p1">
        <h1>
          Download Our <a href="#">App</a>
        </h1>
        <div className="video">
          <div className="video">
            <video autoPlay muted loop playsInline src={about.video}></video>
          </div>
        </div>
      </div>
      
    </div>
  );
}
