import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Map from '../components/Map';
import { Link } from 'react-router-dom';

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
      {/* <button className="backbtn" onClick></button> */}
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
            <div className="noMap">
              <img
                alt="Beer"
                src={
                  'https://images.unsplash.com/photo-1552831125-32128105ea04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
                }
              />
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
