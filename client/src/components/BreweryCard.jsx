import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function BreweryCard(props) {
  return (
    // <div>
    //   <h1>This page will house a BreweryCard</h1>
    // </div>
    <Container>
      <Card
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
        }}
      >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title className="brewName">{props.BreweryName}</Card.Title>
          <Card.Text className="cardText">Wynwood</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}