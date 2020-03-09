import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Button, Form } from "react-bootstrap";
import { ADD_ARTICLE } from "../../js/constants/action-types";
import "./AddArticle.styles.scss";
import { v4 as uuidv4 } from "uuid";

function AddArticle(props) {
  console.log(props);

  const { addArticle } = props;
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    addArticle({
      title: title,
      subtitle: subtitle,
      author: author,
      date: date,
      image: image,
      text: text,
      id: uuidv4()
    });
    props.history.push("/blog");
  };
  return (
    <Container className="addContainer">
      <h1>Please Add Your Article</h1>
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

const mapDispatchToProps = dispatch => {
  return {
    addArticle: payload => dispatch({ type: ADD_ARTICLE, payload: payload })
  };
};
export default connect(null, mapDispatchToProps)(AddArticle);
