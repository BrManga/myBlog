import React from "react";
import "./Main.styles.scss";
import { Container, Row } from "react-bootstrap";
import ArtCard from "../../components/Card/Card";
import { connect } from "react-redux";
import { ADD_ARTICLE } from "../../js/constants/action-types";

function Main({articels, addArticle}) {
  

  const handleClick = slug => {
    addArticle()
  };
  const slugFunc = title => {
    return title
      .split(" ")
      .join("")
      .replace(/\W/g, "")
      .toLowerCase();
  };
  let articlesState = articels.map(item => {
    const slug = slugFunc(item.title);
    return (
      <ArtCard
        key={item.id}
        title={item.title}
        image={item.image}
        text={item.text}
        slug={item.id}
      />
    );
  });
  return (
    <Container className="mainContainer">
      <Row>{articlesState}</Row>
    </Container>
  );
}
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return { addArticle: () => dispatch({ type: ADD_ARTICLE }) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
