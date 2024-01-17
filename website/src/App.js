import React from 'react'
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
