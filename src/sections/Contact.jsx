import { PriceSlider } from '../components/PriceSlider';
import { BtnSend } from '../components/BtnSend';
import React from 'react';

class Contact extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  render() {
    return (
      <section className="contact" id="contact">
        <div className="contact_title title white">
          <h2>Контакты</h2>
          <p>
            Буду рад обратному отзыву! Можете пригласить как на собеседование,
            так и просто высказать ваше мнение о моих работах. Все читаю!
          </p>
        </div>
        <form className="contact_form" method="post" action="/send.php">
          <div className="contact_row">
            <div className="contact_col50">
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
                value={this.firstName}
                required
              />
            </div>
            <div className="contact_col50">
              <input
                type="text"
                name="last-name"
                placeholder="Last Name"
                value={this.lastName}
              />
            </div>
          </div>
          <div className="contact_row">
            <div className="contact_col50">
              <input
                type="email"
                name="email"
                placeholder="Email"
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                value={this.email}
                required
              />
            </div>
            <div className="contact_col50">
              <input
                type="text"
                name="phone"
                placeholder="Mobile No."
                pattern="[\+]\d{11}"
                value={this.phone}
              />
            </div>
          </div>
          <div className="contact_row">
            <div className="contact_col100">
              <textarea
                placeholder="Message"
                name="msg"
                minLength="8"
                maxLength="230"
                value={this.message}
                required
              ></textarea>
            </div>
          </div>
          {/* <div className="contact_row">
            <div className="contact_col100">
              <PriceSlider />
            </div>
          </div> */}
          <div className="contact_send">
            <BtnSend data={this.state} />
          </div>
        </form>
      </section>
    );
  }
}

export { Contact };
