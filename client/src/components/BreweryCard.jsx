import React from 'react';
import { useHistory } from 'react-router-dom';


export default function BreweryCard({brewery}) {
  const history = useHistory()

  const handleClick = (id) => {
    history.push(`/brewery/${id}`);
  };

  return (
    <div className="card" onClick={() => handleClick(brewery.id)}>

            <h2> {brewery.name}</h2>
            <h4>{brewery.city}</h4>
            <button className="moreInfo">More Info</button>
      </div>
    
  );
}