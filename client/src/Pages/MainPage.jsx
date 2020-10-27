import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import {Row} from "react-bootstrap";
import BreweryCard from "../components/BreweryCard";


const MainPage = () => {
  
  const [apiData, setApiData] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {data} = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${event.target.elements.searchbar.value}`)
    setApiData(data)
    
  };
  
  
  return (
  <>
    <div className="CoverPhoto">
      <h1 style={{fontSize:"100px", fontWeight:"700"}}>Git Brew'd</h1>
      <SearchForm handleSubmitProp={handleSubmit} />
    
   </div>
       <div className="brewery">
        {apiData && apiData.map((brewery) => {
          return (
          <Row key={brewery.id}> 
            <BreweryCard brewery={brewery} />
          </Row>
          );
        })}
      </div> 
  </>
  );
};
export default MainPage;
