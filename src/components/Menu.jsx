import { Toggle } from "./Toggle"

function Menu() {
  return <div className="sidebar">
    <ul className="menu">
      <li><a href="#home" onClick={Toggle.toggleMenu}>Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
}

export { Menu }