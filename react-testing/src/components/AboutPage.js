import React from "react";
import "../styles/Navbar.css";
import Navbar from "./Navbar";
import JumbotronAbout from "./Jumbotron-about";
import AboutText from "./About-text";

import Footer from "./Footer";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const AboutPage = () => (

    <div>
        {/* <Navbar /> */}
        <JumbotronAbout />
        <AboutText />
        {/* <Footer /> */}
    </div>
);
export default AboutPage;