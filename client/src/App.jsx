import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import BreweryList from "./Components/BreweryList";
import Brewery from "./Components/Brewery";
import AboutUs from "./Pages/AboutUs";
import LandingPage from "./Pages/LandingPage";
import MainPage from "./Pages/MainPage";


const App = () => {
  useEffect(() => {
    fetch('/api/breweries')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
     <BrowserRouter>
     <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Home" component={MainPage} />
      <Route exact path="/brewery/:location/:term?" component={BreweryList} />
      <Route path="/brewery/:id" component={Brewery} />
      <Route exact path="/about" component={AboutUs} />
   </Switch>
  </BrowserRouter>
  )};

export default App;
