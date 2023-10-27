import { Outlet } from "react-router-dom";
import NavBar from "./share/NavBar";
import Footer from "./share/Footer";

function Main() {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;