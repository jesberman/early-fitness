import React from "react";
import "../styles/Navbar.css";
import Navbar from "./Navbar";
import JumbotronLogin from "./Jumbotron-login";
import LoginCards from "./LoginCards";

import Footer from "./Footer";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const LoginPage = () => (

    <div>
        {/* <Navbar /> */}
        <JumbotronLogin />
        <LoginCards />
        {/* <Footer /> */}
    </div>
);
export default LoginPage;