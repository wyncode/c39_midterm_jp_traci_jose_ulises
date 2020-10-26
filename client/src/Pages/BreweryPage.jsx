import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {Container} from "react-bootstrap";

export default function Brewery() {

  const {id} = useParams()
  const [apiData, setApiData] = useState({})

 
  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries/${id}`).then(res => res.json()).then(data => setApiData(data))
  }, [])

  // console.log("this is coming from brewery page",apiData)
  return (
    <Container className="breweryBody">
      <div className="brewerytitle">
  <h1 style={{ margin: "1rem 0" }}>{apiData.name}</h1>
      </div>
      {/* <div className="middlebody"> */}
      <div className="brewerypic">
        <img
          alt=""
          src={
            "https://lh3.ggpht.com/oR0QAL4qQU7zn1wZXGKSrtNJ-Y0UgPSUXpFZCisfnwBhuse3zmYmJLa1R3zGz4SNV9j0FJPajZbrCsutLjASjxefU5L-=s350"
          }
        />
      </div>
      <div className="brewerylist">
        <ul>
        <li>Phone: {apiData.phone}</li>
          <li>
            Address: {apiData.street}
          </li>
          <li>
            {apiData.city}, {apiData.state} {apiData.postal_code}
          </li>
          <li>
            <a href={apiData.website_url} target="_blank"><button className="brewerybtn">Check Out My Website!</button></a>
          </li>
        </ul>
      </div>
      {/* </div> */}
      <div className="mapbox">
        <h1>mapbox</h1>
      </div>
    </Container>
  );
}