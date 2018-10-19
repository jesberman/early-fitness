import React from "react";
import "../styles/Navbar.css";
import Navbar from "./Navbar";
import JumbotronContact from "./Jumbotron-contact";
import ContactText from "./Contact-text";

import Footer from "./Footer";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const ContactPage = () => (

    <div>
        {/* <Navbar /> */}
        <JumbotronContact />
        <ContactText />
        {/* <Footer /> */}
    </div>
);
export default ContactPage;