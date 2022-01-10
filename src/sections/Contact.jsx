function Contact() {
  return <section className="contact" id="contact">
    <div className="contact_title title white">
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus aspernatur reprehenderit, vero dolor vel delectus magnam laudantium modi culpa velit minus!</p>
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
      <div className="contact_row">
        <div className="contact_col100">
          <input type="submit" value="Send"/>
        </div>
      </div>
    </form>
  </section>
}

export { Contact }