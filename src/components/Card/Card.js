import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Card.styles.scss";
import Details from "../../pages/Details/Details";
function ArtCard({ image, title, text, slug, key, params }) {
  
  const handleClick = () => {
    
  };
  const way = `/blog/${slug}`;
  return (
    <Card className="articleCard">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to={way}>
          <Button className="btn-danger" onClick={handleClick}>Read more...</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ArtCard;
