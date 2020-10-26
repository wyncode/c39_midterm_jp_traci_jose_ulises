import React from "react";
import NavBar from "../components/NavBar";
import BreweryCard from "../components/BreweryCard";
import CoverPhoto from "../components/CoverPhoto";
import {Row} from "react-bootstrap";


export default function Home() {
  
  return (
    <>
      <NavBar />
      <CoverPhoto />
      {/* <Row className="TopPicks">
        <BreweryCard/>
      </Row> */}
    </>    
  )
};