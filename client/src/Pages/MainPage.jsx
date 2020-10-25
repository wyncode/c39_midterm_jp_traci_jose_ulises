import React from "react";
import NavBar from '../components/NavBar';
import BreweryCard from "../components/BreweryCard";
import CoverPhoto from "../components/CoverPhoto";
import Row from "react-bootstrap/Row";


export default function Home() {
  
  return (
    <>
      <NavBar />
      <CoverPhoto />
      <Row className="TopPicks">
        {/* this will need to be changed to work with our
        API  */}
        
        <div className="cardRed">
        <BreweryCard />
        </div>
        <div className="cardBlue">
        <BreweryCard />
        </div>
        <div className="cardYellow">
        <BreweryCard />
        </div>
        
      </Row>
    </>    
  )
};