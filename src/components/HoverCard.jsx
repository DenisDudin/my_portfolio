import avatar from '../img/avatar.png'
import vk from '../img/vk.svg';
import telegram from '../img/telegram.svg';
import linkedin from '../img/linkedin.svg';
import git from '../img/git.svg';

function HoverCard() {
  
  return (
    <aside className="card" id="card" >
      <header className="card_header">
        <a href="#">
          <img src={avatar} />
        </a>
        <h1>Denis Dudin</h1>
        <h2>- Web Developer -</h2>
      </header>

      <div className="card_greeting">
        <p>Привееет!</p>
        <p>
          Я начинаюший frontend-разработчик. Владею HTML5, CSS, JavaScript, React, SCSS и Git, которые также были использованы при разработке данного портфолио.
        </p>
        <p>Буду очень рад советам и конструктивной критике.
        </p>
      </div>

      <div className="card_social-links">
        <div>
          <a href="#">
            <img src={linkedin} />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={vk} />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={telegram} />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={git} />
          </a>
        </div>
      </div>
    </aside>
  );
}

export { HoverCard };
