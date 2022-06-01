import React from "react";
import "normalize.css";

import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import Article from "./components/Article/Article";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Hero title={"Title"} subtitle="Some about text in two lines">
        <Button
          type="button"
          handleClick={() => window.location.replace("https://reactjs.org/")}
        >
          Button
        </Button>
      </Hero>
      <Section>
        <Article
          title="Portfolio"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis accusamus deleniti eveniet quam sapiente nulla?"
        >
          <Portfolio></Portfolio>
        </Article>
      </Section>
    </>
  );
}

export default App;
