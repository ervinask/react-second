import React from "react";
import "./Article.css";

const Article = ({ title, text, children }) => {
  return (
    <article>
      <h1 className="title">{title}</h1>
      <p className="text">{text}</p>
      <div className="content">{children}</div>{" "}
    </article>
  );
};

export default Article;
