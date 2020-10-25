import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import BreweryList from "./Components/BreweryList";
import Brewery from "./Components/Brewery";
import AboutUs from "./Components/AboutUs";


const App = () => {
  useEffect(() => {
    fetch('/api/breweries')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <BrowserRouter>
    {/* this will need to be changed once we pull in our API */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/brewery/:location/:term?" component={BreweryList} />
      <Route path="/brewery/:id" component={Brewery} />
      <Route exact path="/about" component={AboutUs} />
    </Switch>
  </BrowserRouter>
  )};

export default App;
