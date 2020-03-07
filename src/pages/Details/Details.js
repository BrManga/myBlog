import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./Details.styles.scss";

function Details(props) {
  const itemid = props.match.params.slug;
  const detailArray = props.articels.filter(article => {
    return article.id == itemid;
  });
  console.log(detailArray);
  const { title, subtitle, author, image, date, text } = detailArray[0];
  return (
    <Container className="detailContainer">
      <Row className="justify-content-md-center">
        <Col xs="12" className="imageRow">
          <img className="detailImage" src={image} alt={title} />
        </Col>
      </Row>
      <Row className="titleRow">
        <Col xs="12" className="detailTitle">
          {title}
        </Col>
        <Col xs="12" className="subtitle">
          {subtitle}
        </Col>

        <Col xs="12" className="author">
          {author} - {date}
        </Col>
      </Row>
        <hr className="style-seven"/>

      <Row>
        <Col xs="12" className="detailText">
          {text}
        </Col>
      </Row>
    </Container>
  );
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(Details);
