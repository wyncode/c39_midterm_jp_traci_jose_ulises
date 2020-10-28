import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Map from '../components/Map';
import { Link } from 'react-router-dom';
import NoMap from '../Photos/NoMap.png';
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
      <Link to="/Home">
        <button className="backbtn"></button>
      </Link>
      <div className="brewerytitle">
        <h1>{apiData.name}</h1>
      </div>
      <div className="brewbod">
        <div className="brewerypic">
          {apiData.longitude && apiData.latitude ? (
            <Map lng={apiData.longitude} lat={apiData.latitude} />
          ) : (
            <div>
              <img alt="Beer" src={NoMap} />
            </div>
          )}
        </div>
        <div className="brewerylist">
          <ul className="bussinessInfo">
            <li className="phoneNum">Phone: {apiData.phone || 'Not Listed'}</li>
            <li className="address">
              Address: {apiData.street || 'Not Listed'}
            </li>
            <li>
              {apiData.city || 'Not Listed'}, {apiData.state || 'Not Listed'}{' '}
              {apiData.postal_code || 'Not Listed'}
            </li>
            <li className="brewbutton">
              {apiData.website_url && (
                <a href={apiData.website_url} target="_blank">
                  <button className="brewerybtn">Check Out My Website!</button>
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
