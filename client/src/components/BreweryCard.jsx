import React from "react";
import {Card} from "react-bootstrap";
import {Container} from "react-bootstrap";

export default function BreweryCard(props) {
  console.log(props.name);
  console.log(props.city);
  return (
  
    <Container>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title className="brewName">{props.name}</Card.Title>
          <Card.Text className="cardText">{props.city}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
