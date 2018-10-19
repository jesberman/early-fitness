import React from "react";
import "../styles/Navbar.css";
import Navbar from "./Navbar";
import JumbotronHome from "./Jumbotron-home";
import Footer from "./Footer";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const HomePage = () => (

    <div>
        {/* <Navbar /> */}
        <JumbotronHome />
        {/* <Footer /> */}
    </div>
);
export default HomePage;