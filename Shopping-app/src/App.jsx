import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import "./index.css"
import Home from "./pages/Home/Home"
export default function App(){
  return(
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}