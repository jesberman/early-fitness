import React from "react";
import "../styles/Navbar.css";
import Chart from "./Chart";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const JournalMain = () => (

    <div class="jumbotron journal">
        <h1 class="standard-text">
            #Daily Journal Entry
        </h1>

        <br></br>
        <br></br>
        <br></br>

        <h2 class="standard-text">
            Please enter the type of activity you performed today (Ex: Running, Swimming, Weightlifting, etc.)

        </h2>

        <textarea></textarea>

        <br></br>
        <br></br>
        <br></br>

        <h2 class="standard-text">
            Please enter a measurement relevant to your chosen activity (Ex: How many miles you ran, how many pushups you did, etc.)
        </h2>
        <textarea></textarea>

        <br></br>
        <br></br>
        <br></br>

        <p class="lead">
            <a class="btn btn-primary btn-lg standard-text" id="journal-button" href="" role="button">Submit</a>
        </p>


        <script src="../logic.js">
        </script>
    </div>

);

export default JournalMain;