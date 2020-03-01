import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Card.styles.scss"
function ArtCard({ image, title, text }) {
  return (
    <Card className="articleCard">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link>Read more...</Link>
      </Card.Body>
    </Card>
  );
}

export default ArtCard;
