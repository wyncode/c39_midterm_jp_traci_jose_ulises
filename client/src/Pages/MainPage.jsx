import React from "react";
import NavBar from "./NavBar";
import BreweryCard from "./BreweryCard";
import CoverPhoto from "./CoverPhoto";
import {Row} from "react-bootstrap";


export default function Home() {
  
  return (
    <>
      <NavBar />
      <CoverPhoto />
      <Row className="TopPicks">
        <BreweryCard/>
      </Row>
    </>    
  )
};