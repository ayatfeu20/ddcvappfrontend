import {Outlet} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import NavbarMobile from "./navbar/NavbarMobile";
export default function Narbarlayout(){
    return(<div><Navbar/><NavbarMobile/><div><Outlet/></div></div>)
}