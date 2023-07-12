import React from "react";
import Title from "./title";
import Skills from "./skills";
import Project from "./project";
import Blog from "./blog";
import About from "./about";
import { Fade } from "react-awesome-reveal";

export default function homepage() {
  return (
    <div>
      <Fade>
        <Title />
        <Skills />
        <Project />
        <About />
        <Blog />
      </Fade>
    </div>
  );
}
