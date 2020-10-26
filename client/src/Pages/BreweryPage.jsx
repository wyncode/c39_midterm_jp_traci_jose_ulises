import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Map from '../components/Map';

export default function Brewery() {
  const { id } = useParams();
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);
  return (
    <Container className="breweryBody">
      <div className="brewerytitle">
        <h1 style={{ margin: '1rem 0' }}>{apiData.name}</h1>
      </div>
      <div className="brewerypic">
        {apiData.longitude && apiData.latitude && (
          <Map lng={apiData.longitude} lat={apiData.latitude} />
        )}
      </div>
      <div className="brewerylist">
        <ul>
          <li>Phone: {apiData.phone}</li>
          <li>Address: {apiData.street}</li>
          <li>
            {apiData.city}, {apiData.state} {apiData.postal_code}
          </li>
          <li>
            <a href={apiData.website_url} target="_blank">
              <button className="brewerybtn">Check Out My Website!</button>
            </a>
          </li>
        </ul>
      </div>
      </Container>
  );
}
