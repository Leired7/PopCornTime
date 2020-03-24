import React from "react";

import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Movie({ director, title, plot }) {
  console.log("estoy en Movie", director);

  return (
    <Card className="bg-dark text-white">
      <Card.Header>Direction: {director}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{plot}</Card.Text>
        <Button variant="success">Add favorite</Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default Movie;
