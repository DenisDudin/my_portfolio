export default function Menu(props) {
  const { handleMenu } = props;
  return (
    <div className="sidebar">
      <ul className="menu">
        <li>
          <a href="#home" onClick={handleMenu}>
            Приветствие
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleMenu}>
            Обо мне
          </a>
        </li>
        <li>
          <a href="#experience" onClick={handleMenu}>
            Опыт
          </a>
        </li>
        <li>
          <a href="#work" onClick={handleMenu}>
            Работы
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleMenu}>
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
}
