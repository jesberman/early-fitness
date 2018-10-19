import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (

  <div class="topnav" id="myTopnav">
    <a href="/" class="active navbar-brand">
      <h5 >Fitness Tracker</h5>
    </a>
    <a href="/about">About</a>
    <a href="login">Login</a>
    <a href="myprofile">MyProfile</a>
    <a href ="journal">Journal</a>
    <a href="contact">Contact</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>
  </div>

  //<nav className="navbar" style={{backgroundColor: 'green', justifyContent: 'flex-end'}}>

  //<a href="/">Welcome</a>
  //</nav>
);

export default Navbar;