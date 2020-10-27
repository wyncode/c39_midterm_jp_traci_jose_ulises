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
    <div className="card">
      <h1>{brewery.name}</h1>
      <h5>{brewery.city}</h5>
    </div>
  
    // <Container >
    // <Card className="card" onClick={() => handleClick(brewery.id)}>
    //   <Card.Body style={{width:'100%'}} >
    //     <Card.Title className="brewName" style={{backgroundColor:"#3357b7", width:"50%",color:"whitesmoke",fontSize:"30px"}}>{brewery.name}</Card.Title>
    //     <Card.Text className="cardText"style={{backgroundColor:"#f2af29", width:"20%",color:"brown", paddingLeft:"10px", height:"30px", fontSize:"20px"}}>{brewery.city}</Card.Text>
    //   </Card.Body>
    // </Card>
    // </Container>
  );
}
