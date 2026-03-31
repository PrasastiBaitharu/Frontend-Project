import Pagination from "../../components/Pagination/Pagination";
import ShopBanner from "../../components/ShopBanner/ShopBanner";
import ShopProduct from "../../components/ShopProduct/ShopProduct";

export default function Shop(){
    return(
        <div className="shop">
            <ShopBanner/>
            <ShopProduct/>
            <Pagination/>
        </div>
    )
}