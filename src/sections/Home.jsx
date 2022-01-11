import photo from '../img/photo.jpg';
import vk from '../img/vk.svg';
import telegram from '../img/telegram.svg';
import linkedin from '../img/linkedin.svg';
import {SocialNetwork} from '../components/SocialNetwork'

function Home() {
  return (
    <section className="home" id="home">
      <div className="home_img">
        <img src={photo} alt="My photo"/>
      </div>
      <div className="home_content">
        <h5 className="home_logo">My Portfolio</h5>
        <div>
          <h4>
            <span>Hello!</span> I'm
          </h4>
          <h2>Denis Dudin</h2>
          <h4>I'm a Front End Web Developer</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            velit maxime aut facere alias praesentium ducimus repudiandae
            doloremque eveniet. Corporis nisi quas doloremque ratione error
            repellendus cumque delectus vitae eos. Officiis enim id molestiae
            praesentium non aut! Obcaecati sapiente qui voluptatibus fugit?
            Laudantium ad odio nostrum recusandae dolor ipsam natus beatae velit
            dignissimos dolore a voluptatem architecto ipsa, consequatur neque.
          </p>
          <a href="#" className="home_btn">
            About me
          </a>
        </div>
        <ul className="home_social">
          <SocialNetwork social_image={linkedin}/>
          <SocialNetwork social_image={vk}/>
          <SocialNetwork social_image={telegram}/>
        </ul>
      </div>
    </section>
  );
}

export { Home };
