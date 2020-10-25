import React from "react";
import Container from "react-bootstrap/Container";

export default function Brewery() {
  return (
    <Container className="breweryBody">
      <div className="brewerytitle">
        <h1 style={{ margin: "1rem 0" }}>Hello Team 5!</h1>
      </div>
      {/* <div className="middlebody"> */}
      <div className="brewerypic">
        <img
          alt=""
          src={
            "https://lh3.ggpht.com/oR0QAL4qQU7zn1wZXGKSrtNJ-Y0UgPSUXpFZCisfnwBhuse3zmYmJLa1R3zGz4SNV9j0FJPajZbrCsutLjASjxefU5L-=s350"
          }
        />
      </div>
      <div className="brewerylist">
        <ul>
          <li>Name: Lorem ipsum dolor sit amet,</li>
          <li>
            Desription: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Qui dicta minus molestiae vel beatae natus eveniet ratione
            temporibus aperiam harum alias officiis assumenda officia quibusdam
            deleniti eos cupiditate dolore doloribus!
          </li>
          <li>Phone: Lorem ipsum dolor sit amet</li>
          <li>
            Address: Desription:Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </li>
          <li>
            <button className="brewerybtn">Check Out My Website!</button>
          </li>
        </ul>
      </div>
      {/* </div> */}
      <div className="mapbox">
        <h1>mapbox</h1>
      </div>
    </Container>
  );
}