import React, {useState, useEffect}from "react";
import SearchForm from "./SearchForm";
import axios from "axios";



const CoverPhoto=(handleSubmitProp)=>{
  const [search, setSearch] = useState('san diego');
  const [apiData , setAPI] = useState({})


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
      console.log (response.data)
      // Save the fetch data into the apiData state var
      // setApiData(response.data);
    };
    fetchData();
  }, [search]);
  return ( 
  <div className="CoverPhoto">
    <h1>Git Brew'd</h1>
    <SearchForm handleSubmitProp={handleSubmit} />
  </div>
)
}

export default CoverPhoto;