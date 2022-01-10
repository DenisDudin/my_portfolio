import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Toggle } from './components/Toggle';
import { Home } from './sections/Home';
import { Menu } from './components/Menu';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Work } from './sections/Work';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Toggle />
    <Home />
    <Menu />
    <About />
    <Experience />
    <Work />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
