import React from 'react';
import Title from './Title';
import Skills from './Skills';
import Project from './Project';
import About from './About';
import Blog from './Blog';
import {Fade} from 'react-awesome-reveal';

export default function HomePage() {
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
