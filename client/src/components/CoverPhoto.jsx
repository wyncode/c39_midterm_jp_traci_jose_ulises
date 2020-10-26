// import React, { useEffect, useState } from "react";
// import SearchForm from "./SearchForm";
// import axios from "axios";
// import {Row} from "react-bootstrap";
// import BreweryCard from "./BreweryCard";


// const CoverPhoto = () => {
  
//   const [apiData, setApiData] = useState([]);
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const {data} = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${event.target.elements.searchbar.value}`)
//     setApiData(data)
    
//   };
  
  
//   return (
//   <>
//     <div className="CoverPhoto">
//       <h1>Git Brew'd</h1>
//       <SearchForm handleSubmitProp={handleSubmit} />
    
//    </div>
//        <div className="brewery">
//         {apiData && apiData.map((brewery) => {
//           return (
//           <Row key={brewery.id}> 
//             <BreweryCard brewery={brewery} />
//           </Row>
//           );
//         })}
//       </div> 
//   </>
//   );
// };
// export default CoverPhoto;
