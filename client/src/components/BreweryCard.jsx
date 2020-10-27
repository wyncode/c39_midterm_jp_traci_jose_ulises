import React from "react";
import {Card} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {useHistory} from 'react-router-dom';

export default function BreweryCard({brewery, bgColors}) {
  const history = useHistory()
  const handleClick = (id) => {
  history.push(`/brewery/${id}`)
  }
   

  return (
  
    <Container >
    <Card className="card" onClick={() => handleClick(brewery.id)}>
      <Card.Body style={{width:'100%'}} >
        <Card.Title className="brewName" style={{backgroundColor:"#3357b7",color:"whitesmoke",fontSize:"60px",margin:"auto"}}>{brewery.name}</Card.Title>
        <Card.Text className="cardText"style={{backgroundColor:"#f2af29",color:"darkBrown", paddingLeft:"10px", fontSize:"40px", margin:"auto"}}>{brewery.city}</Card.Text>
      </Card.Body>
    </Card>
    </Container>
  );
}
