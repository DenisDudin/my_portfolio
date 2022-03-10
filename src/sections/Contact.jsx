import { BtnSend } from '../components/BtnSend';
import React from 'react';

window.addEventListener('DOMContentLoaded', function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = '+7 (___) ___ ____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, ''),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf('_');
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return '\\d{1,' + a.length + '}';
        })
        .replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == 'blur' && this.value.length < 5) this.value = '';
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);
  });
});

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact_title title white">
        <h2>Контакты</h2>
        <p>
          Буду рад обратному отзыву! Можете пригласить как на собеседование, так
          и просто высказать ваше мнение о моих работах. Все читаю!
        </p>
      </div>
      <form className="contact_form">
        <div className="contact_row">
          <div className="contact_col50">
            <input id="first-name" type="text" name="first-name" placeholder="Имя" required />
          </div>
          <div className="contact_col50">
            <input id="last-name" type="text" name="last-name" placeholder="Фамилия" />
          </div>
        </div>
        <div className="contact_row">
          <div className="contact_col50">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Адрес почты"
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              required
            />
          </div>
          <div className="contact_col50">
            <input
              className="tel"
              id="phone"
              type="text"
              name="phone"
              placeholder="Телефон"
              pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}\s\d{4}"
            />
          </div>
        </div>
        <div className="contact_row">
          <div className="contact_col100">
            <textarea
              id="message"
              placeholder="Сообщение"
              name="msg"
              minLength="8"
              maxLength="230"
              required
            ></textarea>
          </div>
        </div>
        <div className="contact_send">
          <BtnSend />
          {/* <button onClick={this.telegram}>send</button> */}
        </div>
      </form>
    </section>
  );
}

export { Contact };
