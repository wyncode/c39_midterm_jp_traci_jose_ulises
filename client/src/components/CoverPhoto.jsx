import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";
import {Row} from "react-bootstrap";
import BreweryCard from "./BreweryCard";


const CoverPhoto = () => {
  const [search, setSearch] = useState("");
  const [apiData, setApiData] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Take the value of the input box.
    // console.log(event.target.elements.searchbar.value);
    // reminder: setSearch is the only way to change the search value.
    setSearch(event.target.elements.searchbar.value);
  };
  // This code only kicks in if "search" ever changes value.
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://api.openbrewerydb.org/breweries?by_city=${search}`
      );
      console.log(response.data);
      // Save the fetch data into the apiData state var
      setApiData(response.data);
    };
    fetchData();
  }, [search]);
  console.log(apiData);
  return (
  <>
    <div className="CoverPhoto">
      <h1>Git Brew'd</h1>
      <SearchForm handleSubmitProp={handleSubmit} />
    
   </div>
       <div className="brewery">
        {apiData.map((brewery) => {
          return (
          <Row key={brewery.id}> 
            <BreweryCard  name={brewery.name} city = {brewery.city} />
          </Row>
          );
        })}
      </div> 
  </>
  );
};
export default CoverPhoto;
