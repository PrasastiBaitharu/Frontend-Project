import BlogBanner from "../../components/BlogBanner/BlogBanner";
import BlogContent from "../../components/BlogContent/BlogContent";
import Pagination from "../../components/Pagination/Pagination";

export default function Blog(){
    return(
        <div className="blog">
            <BlogBanner/>
            <BlogContent/>
            <Pagination/>
        </div>
    )
}