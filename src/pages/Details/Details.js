import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Details.styles.scss";
import { EDIT_ARTICLE, DELETE_ARTICLE } from "../../js/constants/action-types";

function Details(props) {
  const { editArticle, deleteArticle, articels } = props;

  const itemid = props.match.params.slug;
  const detailArray = articels.filter(article => {
    return article.id == itemid;
  });
  console.log("detailArray", detailArray);
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
      <hr className="style-seven" />

      <Row>
        <Col xs="12" className="detailText">
          {text}
        </Col>
      </Row>
      <Row className="buttonGroup">
        <Col xs="6">
          <Button
            onClick={() => editArticle(detailArray[0].id)}
            variant="warning"
            block
          >
            EDIT
          </Button>
        </Col>
        <Col xs="6">
          <Button
            onClick={() => {
              deleteArticle(detailArray[0].id);
              props.history.push("/blog");
            }}
            variant="danger"
            block
          >
            REMOVE
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
const mapStateToProps = state => {
  return { articels: state.articels };
};
const mapDispatchToProps = dispatch => {
  return {
    editArticle: id => dispatch({ type: EDIT_ARTICLE, id: id }),
    deleteArticle: id => dispatch({ type: DELETE_ARTICLE, id: id })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
