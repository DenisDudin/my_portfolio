import { gsap } from "gsap";


function handleButtonClick() {
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
    <div className="button-send" onClick={handleButtonClick}>
      <p>Отправить</p>
    </div>
  </>
}

export { BtnSend }