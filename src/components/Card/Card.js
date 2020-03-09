import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Card.styles.scss";
function ArtCard({ image, title, text, slug, params }) {
  const handleClick = () => {};
  const way = `/blog/${slug}`;
  var shortedText;
  if (text.split(" ").length >= 30) {
    shortedText = text
      .split(" ")
      .slice(0, 30)
      .join(" ");
  }
  return (
    <Card className="articleCard">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{shortedText}...</Card.Text>
        <Link to={way}>
          <Button className="btn-danger" onClick={handleClick}>
            Read more...
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ArtCard;
