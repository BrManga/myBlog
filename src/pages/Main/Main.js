import React from "react";
import "./Main.styles.scss";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import ArtCard from "../../components/Card/Card";
import { useHistory } from "react-router-dom";

function Main() {
  const initialState = [
    {
      title: "First Title",
      image:
        "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1357&q=80",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: 1
    },
    {
      title: "Second Title",
      image:
        "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: 2
    },
    {
      title: "Third Title",
      image:
        "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1357&q=80",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: 3
    }
  ];
  const [articles, setArticles] = useState(initialState);
  let history = useHistory();

  const handleClick = slug => {
    history.push(`/${slug}`);
  };
  const slugFunc = title => {
    return title
      .split(" ")
      .join("")
      .replace(/\W/g, "")
      .toLowerCase();
  };
  let articlesState = articles.map(item => {
    const slug = slugFunc(item.title);
    return (
      <ArtCard
        key={item.id}
        title={item.title}
        image={item.image}
        text={item.text}
        slug={slug}
      />
    );
  });
  return (
    <Container className="mainContainer">
      <Row>{articlesState}</Row>
    </Container>
  );
}

export default Main;
