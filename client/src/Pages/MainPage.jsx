import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import BreweryCard from "../components/BreweryCard";


const MainPage = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false)
  
  
   
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target
    setLoading(true)
   
    try {
      const {data} = await  axios.get(`/api/breweries/${event.target.elements.searchForm.value}`)
      console.log (data)  
      setApiData(data)
        setLoading(false)
     
      form.reset()
   
    } catch (error) {
      console.log(error)
    }
    };
    

  
  return (
  <>
    <div className="CoverPhoto">
      <h1 style={{fontFamily:"monospace", fontSize:'10vw', color:'whitesmoke',paddingLeft:'10px',marginBottom:'1px',fontWeight:'700'}}>Git </h1>
      <h1 style={{fontFamily:"monospace", fontSize:'10vw', color:'whitesmoke',paddingLeft:'10px',marginBottom:'1px',fontWeight:'700'}}>Brew'd</h1>
      <div className="BreweryFinder">
      <h3 style={{fontSize:'5vw', color:'whitesmoke'}}>Brewery Finder</h3>
      <SearchForm handleSubmitProp={handleSubmit} loading={loading}/>
      </div>
   </div>
       <div className="brewery" styles={{width: "100%"}}>
        {apiData && apiData.map((brewery, index) => {
          return (
            <div key={brewery.id} className={
              index % 3 === 0
                ? "yellow"
                : index % 2 === 0
                ? "blue"
                : "orange"}>
            <BreweryCard brewery={brewery}/>
            </div>
          );
        })}
      </div> 
  </>
  );
};
export default MainPage;
