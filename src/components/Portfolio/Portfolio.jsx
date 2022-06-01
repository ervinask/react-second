import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const myPortfolio = [
    {
      image:
        "https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000",
      summary: "Summary",
    },
    {
      image:
        "https://img.freepik.com/free-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000",
      summary: "Lorem ipsum",
    },
    {
      image:
        "https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000",
      summary: "Summary",
    },
    {
      image:
        "https://img.freepik.com/free-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000",
      summary: "Lorem ipsum",
    },
    {
      image:
        "https://img.freepik.com/free-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000",
      summary: "Summary",
    },
    {
      image:
        "https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000",
      summary: "Lorem ipsum",
    },
  ];

  return (
    <div className="container-2">
      {myPortfolio.map((item) => (
        <div className="card">
          <img src={item.image} />
          <p className="summary">{item.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
