import avatar from '../img/avatar.png';
import vk from '../img/vk.svg';
import telegram from '../img/telegram.svg';
import linkedin from '../img/linkedin.svg';
import git from '../img/git.svg';

function HoverCard() {
  window.addEventListener('scroll', function () {
    const card = document.getElementById('card');
    const heightHome = document.getElementById('home').clientHeight;

    if (heightHome <= document.documentElement.scrollTop) {
      card.classList.add('wow', 'animate__animated', 'animate__rotateIn');
    } else {
      card.classList.remove('wow', 'animate__animated', 'animate__zoomOut');
    }
  });

  return (
    <aside className="card" id="card">
      <header className="card_header">
        <img src={avatar} />

        <h1>Denis Dudin</h1>
        <h2>- Web Developer -</h2>
      </header>

      <div className="card_greeting">
        <p>Привееет!</p>
        <p>
          Я начинаюший frontend-разработчик. Владею HTML5, CSS, JavaScript,
          React, SCSS и Git, которые также были использованы при разработке
          данного портфолио.
        </p>
        <p>Буду очень рад советам и конструктивной критике.</p>
      </div>

      <div className="card_social-links">
        <div>
          <a href="https://www.linkedin.com/in/denis-dudin-7b54a522a/" target="_blank">
            <img src={linkedin} />
          </a>
        </div>
        <div>
          <a href="https://vk.com/d0bry_den" target="_blank">
            <img src={vk} />
          </a>
        </div>
        <div>
          <a href="https://t.me/D0bryDen" target="_blank">
            <img src={telegram} />
          </a>
        </div>
        <div>
          <a href="https://github.com/DenisDudin" target="_blank">
            <img src={git} />
          </a>
        </div>
      </div>
    </aside>
  );
}

export { HoverCard };
