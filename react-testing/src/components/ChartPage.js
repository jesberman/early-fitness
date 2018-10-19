import React from "react";
import "../styles/Navbar.css";
import Navbar from "./Navbar";
import JumbotronContact from "./Jumbotron-contact";
import Chart from "./Chart";

import Footer from "./Footer";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const ChartPage = () => (

    <div>
        {/* <Navbar /> */}
        {/* <JumbotronContact /> */}
        <Chart />
        {/* <Footer /> */}
    </div>
);
export default ChartPage;