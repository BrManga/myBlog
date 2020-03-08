import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Button, Form } from "react-bootstrap";
import { SAVE_ARTICLE } from "../../js/constants/action-types";
import "./Edit.styles.scss";

function Edit(props) {
  console.log("Edit page props", props);
  console.log(props);

  const articles = props.edit;
  const { saveArticle } = props;
  const [title, setTitle] = useState(articles.title);
  const [subtitle, setSubtitle] = useState(articles.subtitle);
  const [author, setAuthor] = useState(articles.author);
  const [date, setDate] = useState(articles.date);
  const [image, setImage] = useState(articles.image);
  const [text, setText] = useState(articles.text);

  const submitHandler = e => {
    e.preventDefault();
    saveArticle({
      title: title,
      subtitle: subtitle,
      author: author,
      date: date,
      image: image,
      text: text,
      id: articles.id
    });
    props.history.push("/blog");
  };
  return (
    <Container className="editContainer">
      <h1>Welcome to Edit Page</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title.."
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formSubtitle">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Subtitle.."
            value={subtitle}
            onChange={e => setSubtitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author.."
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Article Issue Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="Date.."
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formImage">
          <Form.Label>Article Image</Form.Label>
          <Form.Control
            as="textarea"
            rows="2"
            placeholder="Article Image URL.."
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Article Text</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Text.."
            rows="10"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Save
        </Button>
      </Form>
    </Container>
  );
}
const mapStateToProps = state => {
  return { articles: state.articles, edit: state.edit };
};
const mapDispatchToProps = dispatch => {
  return {
    saveArticle: payload => dispatch({ type: SAVE_ARTICLE, payload: payload })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
