import { PriceSlider } from "../components/PriceSlider"
import { BtnSend } from "../components/BtnSend"

function Contact() {
  return <section className="contact" id="contact">
    <div className="contact_title title white">
      <h2>Контакт</h2>
      <p>Буду рад обратному отзыву! Можете пригласить как на собеседование, так и просто высказать ваше мнение о моих работах. Все читаю!</p>
    </div>
    <form className="contact_form">
      <div className="contact_row">
        <div className="contact_col50">
          <input type="text" name="" placeholder="First Name"/>
        </div>
        <div className="contact_col50">
          <input type="text" name="" placeholder="Last Name"/>
        </div>
      </div>
      <div className="contact_row">
        <div className="contact_col50">
          <input type="text" name="" placeholder="Email"/>
        </div>
        <div className="contact_col50">
          <input type="text" name="" placeholder="Mobile No."/>
        </div>
      </div>
      <div className="contact_row">
        <div className="contact_col100">
          <textarea placeholder="Message"></textarea>
        </div>
      </div>
      {/* <div className="contact_row">
        <div className="contact_col100">
          <PriceSlider />
        </div>
      </div> */}
      <div className="contact_send">
        <BtnSend />
      </div>
    </form>
  </section>
}

export { Contact }