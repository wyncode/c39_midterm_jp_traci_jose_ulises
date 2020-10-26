import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LandingPage from "./Pages/LandingPage";
import BreweryPage from "./Pages/BreweryPage";
import AboutUs from './Pages/AboutUs';

const App = () => (
  <BrowserRouter>
    {/* this will need to be changed once we pull in our API */}
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Home" component={MainPage} />
      <Route exact path="/brewery/:id" component={BreweryPage} />
      <Route exact path="/About" component={AboutUs} /> 
    </Switch>
  </BrowserRouter>
);

export default App;
