import { useState } from "react";
import Header from "../../components/header/Header";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import AppDownload from "../../components/AppDownload/AppDownload";

export default function Home(){
    const [category , setCategory] = useState("All");
    return(
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <AppDownload/>
        </div>
    )
}