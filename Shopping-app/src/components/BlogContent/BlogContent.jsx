import { blog } from "../../assets/asset";
import "./BlogContent.css"
export default function BlogContent(){
    return(
        <div className="blog-content">
            <div className="blog-box">
            <div className="blog-img">
                <img src={blog.blog1} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersey Zip-up Hoodie</h4>
                <p>Kickstar man braid godard coloring book. Reclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
                <a href="#">CONTINUE READING</a>
                <h1>13/01</h1>
            </div>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={blog.blog2} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersey Zip-up Hoodie</h4>
                <p>Kickstar man braid godard coloring book. Reclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
                <a href="#">CONTINUE READING</a>
                <h1>13/04</h1>
            </div>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={blog.blog3} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersey Zip-up Hoodie</h4>
                <p>Kickstar man braid godard coloring book. Reclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
                <a href="#">CONTINUE READING</a>
                <h1>12/01</h1>
            </div>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={blog.blog4} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersey Zip-up Hoodie</h4>
                <p>Kickstar man braid godard coloring book. Reclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
                <a href="#">CONTINUE READING</a>
                <h1>16/01</h1>
            </div>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={blog.blog6} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersey Zip-up Hoodie</h4>
                <p>Kickstar man braid godard coloring book. Reclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
                <a href="#">CONTINUE READING</a>
                <h1>10/03</h1>
            </div>
        </div>
        </div>
    )
}