import { gsap } from 'gsap';
import $ from 'jquery';

function handleButtonClick() {
  let timeLine = new gsap.timeline({
    paused: false,
  });

  timeLine
    .to('.button-send p', 0.6, {
      opacity: 0,
    })
    .to('.button-send', 0.8, {
      height: 0.2,
      opacity: 0.5,
      boxShadow: '0px 0px 35px 7px #00bcd4',
      delay: 0.25,
    })
    .to('.button-send', 0.1, {
      opacity: 0.5,
      background: '#00bcd4',
    })
    .to('.button-send', 0, {
      width: 1,
      delay: 0.2,
    })
    .to('.button-send', 0.1, {
      boxShadow: '0px 0px 100px 55px #00bcd4',
      y: 90,
      height: 100,
      delay: 0.23,
    })
    .to('.button-send', 0.3, {
      height: 1000,
      y: -1500,
      boxShadow: '0px 0px 85px 17px #00bcd4',
      delay: 0.2,
    })
    .to('.button-send', 0.1, {
      opacity: 0,
    })
    .to('.contact_thank', 1, {
      opacity: 1,
      delay: 0.3,
    });
}

function BtnSend(props) {
  

  const handleClick = (e) => {
    let chatid = "-637783358";
    let token = "5158689723:AAEcnIN76WP_F8gJSUk4rbh0K97qKbLE4VY";
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    let text = `Имя: ${firstName}\nФамилия: ${lastName}\nEmail: ${email}\nТелефон: ${phone}\nMsg ${message}`;

    
    if(firstName && email && message) {
      let z=$.ajax({
        type: "POST",  
        url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
        data: "parse_mode=HTML&text="+encodeURIComponent(text), 
        }); 
      handleButtonClick()
    } else {
      alert("Введите, пожалуйста, ваше имя, почту и сообщение. Также можете указать номер телефона для связи.")
    }
    e.stopPropagation();
    e.preventDefault();
  }


  return (
    <>
      <p className="contact_thank">Спасибо!</p>
      <button className="button-send" type="submit" onClick={handleClick}>
        <p>Отправить</p>
      </button>
    </>
  );
}

export { BtnSend };
