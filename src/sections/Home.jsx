import photo from '../img/photo.jpg';
import vk from '../img/vk.svg';
import telegram from '../img/telegram.svg';
import linkedin from '../img/linkedin.svg';
import git from '../img/git.svg';
import { SocialNetwork } from '../components/SocialNetwork';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home_img">
        <img src={photo} alt="My photo" />
      </div>
      <div className="home_content">
        <h5 className="home_logo">My Portfolio</h5>
        <div>
          <h4>
            <span>Привет!</span> Меня зовут
          </h4>
          <h2>Денис Дудин</h2>
          <h4 className="position">Я Junior Frontend - developer</h4>
          <p>
            Практикую написание сайтов с использованием React, повышаю
            доступность и понятность своего кода, изучаю сторонние библиотеки
            для большей функциональности и анимации элементов на странице. С
            головой втягиваюсь в работу, которая доставляет мне удовольствие.
            Умею и готов работать на результат. <br />В свободное время
            занимаюсь спортом, люблю почитать или посмотреть интересные фильмы,
            интересуюсь экономикой.
          </p>
          <a href="#about" className="home_btn">
            Обо мне
          </a>
        </div>
        <ul className="home_social">
          <SocialNetwork social_image={linkedin} social_link='https://www.linkedin.com/in/denis-dudin-7b54a522a/' target="_blank"/>
          <SocialNetwork social_image={vk} social_link='https://vk.com/d0bry_den' target="_blank"/>
          <SocialNetwork social_image={telegram} social_link='https://t.me/D0bryDen' target="_blank"/>
          <SocialNetwork social_image={git} social_link='https://github.com/DenisDudin' target="_blank"/>
        </ul>
      </div>
    </section>
  );
}

export { Home };
