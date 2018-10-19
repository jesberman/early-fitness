import React from "react";
import "../styles/Navbar.css";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import LoginPage from "./LoginPage";
import MyprofileMain from "./Myprofile-main";
import ChartPage from "./ChartPage";
import JournalMain from "./Journal-main";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Routes = () => (

    <div>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/myprofile" component={MyprofileMain} />
                    <Route exact path="/chart" component={ChartPage} />
                    <Route exact path="/journal" component={JournalMain} />

                </Switch>
            </div>
        </Router>

    </div>

);

export default Routes;