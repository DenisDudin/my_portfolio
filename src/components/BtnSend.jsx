import { gsap } from "gsap";

// document.addEventListener("DOMContentLoaded", function () {
//   const form = 
// })

// function formSend(e,props){
//   const form = document.getElementById('form')
//   e.preventDefault();
//   let response = fetch('sendmail.php', {
//     method: 'POST',
//     body: props
//   });
//   if (response.ok) {
//     form.reset();
//   }

// }


function valid(props) {
  const {firstName, lastName, email, phone, message} = props;

}


function handleButtonClick(){

  let timeLine = new gsap.timeline({
    paused: false
  });

  timeLine
    .to('.button-send p', 0.6, {
      opacity: 0
    })
    .to('.button-send', 0.8, {
      height: 0.2,
      opacity: 0.5,
      boxShadow: "0px 0px 35px 7px #00bcd4",
      delay: 0.25
    })
    .to('.button-send', 0.1, {
      opacity: 0.5,
      background: "#00bcd4"
    })
    .to('.button-send', 0, {
      width: 1,
      delay: 0.2
    })
    .to('.button-send', 0.1, {
      boxShadow: "0px 0px 100px 55px #00bcd4",
      y: 90,
      height: 100,
      delay: 0.23
    })
    .to('.button-send', 0.3, {
      height: 1000,
      y: -1500,
      boxShadow: "0px 0px 85px 17px #00bcd4",
      delay: 0.2
    })
    .to('.button-send', 0.1, {
      opacity: 0
    })
    .to(".contact_thank", 1, {
      opacity: 1,
      delay: 0.3
    });
}

function BtnSend() {
  return <>
    <p className="contact_thank">Спасибо!</p>
    <button className="button-send" type="submit">
      <p>Отправить</p>
    </button>
  </>
  
}

export { BtnSend }