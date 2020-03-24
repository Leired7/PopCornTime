import React from "react";

import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Movie({ movies }) {
  console.log("estoy en Movie", movies);

  return (
    <Card className="bg-dark text-white" key={movies.id}>
      <Card.Header>Direction: {movies.director}</Card.Header>
      <Card.Body>
        <Card.Title>{movies.title}</Card.Title>
        <Card.Text>{movies.plot}</Card.Text>
        <Button variant="success">Add favorite</Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default Movie;
