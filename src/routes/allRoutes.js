import { Routes, Route } from "react-router-dom";
import Home from "../view/home";
import SecondSection from "../view/secondSection";
import ThirdSection from "../view/thirdSection";
import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";

const AllRoutes = () => {
    return (
        <>
            <div className="side_bar_place">
                <SideBar />
            </div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="second" element={<SecondSection />} />
                <Route path="third" element={<ThirdSection />} />
            </Routes>
        </>
    );
}
 
export default AllRoutes;