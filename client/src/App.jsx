import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LandingPage from "./Pages/LandingPage";
import BreweryPage from "./Pages/BreweryPage";


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Home" component={MainPage} />
      <Route exact path="/brewery/:id" component={BreweryPage} /> 
    </Switch>
  </BrowserRouter>
);

export default App;
