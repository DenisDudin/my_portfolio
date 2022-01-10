import { Toggle } from "./Toggle"

function Menu() {
  return <div className="sidebar">
    <ul className="menu">
      <li><a href="#home" onClick={Toggle.toggleMenu}>Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#">Experience</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
}

export { Menu }