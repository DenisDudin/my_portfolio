import photoAbout from '../img/photo-about.jpg';

function About() {
  return <section className="about" id="about">
    <div className="about_title title white">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a dolorem consequatur porro recusandae quaerat?</p>
    </div>
    <div className="about_content">
      <div className="about_text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maiores ipsum doloremque dolorum itaque suscipit qui culpa aliquam veniam vero, blanditiis maxime vitae voluptate voluptatibus accusamus recusandae aperiam totam! Quidem.
        Officia molestiae inventore blanditiis quaerat necessitatibus quia explicabo debitis voluptates nulla cum dolores hic laudantium sit, consequuntur asperiores consectetur? Necessitatibus nulla quisquam aut alias dicta sapiente odit repellendus beatae quaerat?</p>
      </div>
      <div className="about_img">
        <img src={photoAbout} alt="My photo" width="500" height="350"/>
      </div>
    </div>
  </section>
}

export { About }