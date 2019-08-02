import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../../images/cycle_tour.jpg";
import img2 from "../../images/amashova.png";
import img3 from "../../images/tourDBN.jpg";
import "./Products.css";

const Products = () => {
  // transport events variable - could also have used state from App.js,
  // wanted to just try both.

  let transport = [
    { event: "Cape Town Cycle Tour", date: "10 March 2020", logo: img1 },
    { event: "Amashova Durban", date: "10 October 2019", logo: img2 },
    { event: "Tour of Durban", date: "08 May 2020", logo: img3 }
  ];

  let cardContent = transport.map((card, i) => {
    //map through the transport array variable set and generates a Bootstrap card
    // component.

    return (
      <Card
        bg="light"
        style={{
          width: "30%"
        }}
        key={i}
      >
        <Card.Img
          style={{ height: "250px", marginTop: "10px" }}
          variant="top"
          src={card.logo}
        />
        <Card.Body>
          <Card.Title>{card.event}</Card.Title>
          <Card.Text>
            <span>{card.date}</span>
            <br />
            <br />
            <button>More Info</button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="Header">
      <h1>Our Upcoming Transport Events</h1>
      <div className="Products">{cardContent}</div>
    </div>
  );
};

export default Products;
