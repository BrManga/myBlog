import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Card.styles.scss"
function ArtCard({ image, title, text, slug }) {
  const way=`/blog/${slug}`
  return (
    <Card className="articleCard">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to={way}><Button>Read more...</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default ArtCard;
