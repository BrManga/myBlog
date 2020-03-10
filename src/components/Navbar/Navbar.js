import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container
} from "react-bootstrap";
import "./Navbar.style.scss";
import logo from "../../images/logo.svg";
import { FILTER_ARTICLE } from "../../js/constants/action-types";


function Navigation({ articles, filterArticle }) {
  
  const allTopics = new Set();
  articles.map(article => {
    for (let index = 0; index < article.topics.length; index++) {
      allTopics.add(article.topics[index]);
    }
    return allTopics;
  });
  const arrayAllTopics = Array.from(allTopics);

  const navProducer = arrayAllTopics.map(topic => {
    return (
      <NavDropdown.Item
      key={topic}
        className="topicItem"
        value={topic}
        onClick={() => filterArticle(topic)}
      >
        {topic}
      </NavDropdown.Item>
    );
  });

  return (
    <>
      <div className="navTop">
        <Navbar.Brand>
          <Link to="/blog" className="brandLink">
            <img src={logo} alt="logo" /> foreSight
          </Link>
        </Navbar.Brand>

        <Link
          className="addArticleButton btn btn-danger"
          variant="dark"
          to="/addarticle"
        >
          Add An Article
        </Link>
      </div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Nav className="ml-auto">
              <Nav>
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </Nav>
              <NavDropdown
                className="navbarLinks"
                title="Topics"
                id="basic-nav-dropdown"
              >
                {navProducer}
              </NavDropdown>
              <Nav>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    filterArticle: (filterWord) => dispatch({ type: FILTER_ARTICLE, filterWord: filterWord })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
