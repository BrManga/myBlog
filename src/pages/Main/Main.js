import React, { lazy, Suspense } from "react";
import "./Main.styles.scss";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { ADD_ARTICLE } from "../../js/constants/action-types";
const ArtCard = lazy(() => import("../../components/Card/Card"))
function Main(props) {
  var articles = props.filtered || props.articles;
  let articlesState = articles.map(item => {
    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <ArtCard
          key={item.id}
          title={item.title}
          image={item.image}
          text={item.text}
          slug={item.id}
        /></Suspense>
    );
  });
  return (
    <Container fluid={true} className="mainContainer">
      <Container>
        <Row>{articlesState}</Row>
      </Container>
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
