import React from "react";
import {Card} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {useHistory} from 'react-router-dom';

export default function BreweryCard({brewery}) {
  const history = useHistory()
  const handleClick = (id) => {
  history.push(`/brewery/${id}`)
  }
   

  return (
  
    <Container >
    <Card className="card" onClick={() => handleClick(brewery.id)}>
      <Card.Body style={{width:'100%', display:'flex', justifyContent:'center'}} >
        <div>
        <Card.Title className="brewName">{brewery.name}</Card.Title>
        <Card.Text className="cardText">{brewery.city}</Card.Text>
        </div>
    
      
      </Card.Body>
    </Card>
    </Container>
  );
}
