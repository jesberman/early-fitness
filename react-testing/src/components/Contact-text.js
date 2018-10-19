import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const ContactText = () => (


    <div id="contact-text" >

        <br></br>

        <h2 class="standard-text">
            We can be reached at:
        </h2>

        <br></br>

        <h3 class="standard-text">
            Fitness Tracker, Inc.
        </h3>

        <h3 class="standard-text">
            143 Wozniak Drive
        </h3>

        <h3 class="standard-text">
            San Jose, CA 94088
        </h3>

        <br></br>

        <h3 class="standard-text">
            555-555-5556
        </h3>

        <br></br>

        <h3 class="standard-text">
            jclayton@fitnesstracker.com
        </h3>

        <br></br>

    </div>
);

export default ContactText;