import Menu from './Menu';

function toggleMenu() {
  const menuToggle = document.querySelector('.toggle');
  const sidebar = document.querySelector('.sidebar');
  menuToggle.classList.toggle('active')
  sidebar.classList.toggle('active')
}

function Toggle() { 
  return (
    <>
      <Menu handleMenu={toggleMenu} />
      <div className="toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  )
}

export { Toggle }