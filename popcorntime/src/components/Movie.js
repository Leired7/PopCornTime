import React from "react";

import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Movie = (props) => {
  /* console.log("estoy en Movie", props);
  console.log(props.favoriteFilms); */

  return (
    <div>
      {props.infoFilms.map((element, index) => {
        return (
          <Card
            key={index}
            className={
              props.favoriteFilms.includes(index)
                ? "bg-dark text-white"
                : "bg-light text-dark"
            }
          >
            <Card.Header>Direction: {element.director}</Card.Header>
            <Card.Body>
              <Card.Title>{element.title}</Card.Title>
              <Card.Text>{element.plot}</Card.Text>
              {!props.favoriteFilms.includes(index) ? (
                <Button
                  onClick={() => props.addToFavorite(index)}
                  variant="info"
                >
                  Add Favorite
                </Button>
              ) : (
                <Button variant="danger" onClick={() => props.onRemove(index)}>
                  Remove
                </Button>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Movie;
