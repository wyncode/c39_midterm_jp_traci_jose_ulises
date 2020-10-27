import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import {Row} from "react-bootstrap";
import BreweryCard from "../components/BreweryCard";


const MainPage = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false)
  
  
   
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
   
    try {
      const {data} = await  axios.get(`https://api.openbrewerydb.org/breweries?by_city=${event.target.elements.searchbar.value}`)
      setTimeout(() => {
        setApiData(data)
        setLoading(false)
      }, 3000);
   
    } catch (error) {
      console.log(error)
    }
    
    };
    

  
  return (
  <>
    <div className="CoverPhoto">
      <h1 style={{fontSize:"150px", fontWeight:"700", background:"rgba(0, 0, 0, 0.1)"}}>Git Brew'd</h1>
      <SearchForm handleSubmitProp={handleSubmit} loading={loading}/>
      
   </div>
       <div className="brewery" styles={{width: "100%"}}>
        {apiData && apiData.map((brewery, index) => {
          return (
          <Row key={brewery.id} id="mainPageRow"  className={
            index % 3 === 0
              ? "yellow"
              : index % 2 === 0
              ? "blue"
              : "beerBubbles"
          }> 
            <BreweryCard brewery={brewery}/>
          </Row>
          );
        })}
      </div> 
  </>
  );
};
export default MainPage;
