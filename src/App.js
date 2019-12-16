import './App.css';
import React from 'react';
import Welcome from './components/Welcome'
import About from './components/About'
import Projects from './components/Projects'
import BlogPosts from './components/BlogPosts'
import Contact from './components/Contact'



function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <Projects />
      <BlogPosts />
      <Contact />
    </div>
  );
}

export default App;