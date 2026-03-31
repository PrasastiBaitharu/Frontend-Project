import Banner from "../../components/banner/Banner"
import Banner3 from "../../components/Banner3/Banner3"
import Feature from "../../components/Feature/Feature"
import FeatureProduct from "../../components/feature_product/FeatureProduct"
import Header from "../../components/Header/Header"
import NewArrival from "../../components/NewArrival/NewArrival"
import SmBanner from "../../components/Sm-Banner/SmBanner"
export default function Home(){
    return(
        <div className="home">
            <Header/>
            <Feature/>
            <FeatureProduct/>
            <Banner/>
            <NewArrival/>
            <SmBanner/>
            <Banner3/>
        </div>
    )
}