import courseraJS1 from '../img/works/coursera(js1).jpg'
import courseraJS2 from '../img/works/coursera(js2).jpg'
import courseraWeb from '../img/works/coursera(web).jpg'
import fccJS from '../img/works/freeCodeCamp(js).jpg'

function Work() {
  return <section className="work" id="work">
    <div className="work_title title">
      <h2>Работа</h2>
      <p>В разделе представлены разработанные веб-приложения и полученные сертификаты</p>
    </div>
    <div className="work_content">
      <div class="work_box">
        <div class="work_img">
          <img src={courseraJS1} alt="ballons" />
        </div>
        <div class="work_description">
          <span class="tag tag-purple">Popular</span>
          <h4>
            How to Keep Going When You Don’t Know What’s Next
          </h4>
          <p>
            The future can be scary, but there are ways to
            deal with that fear.
          </p>
        </div>
      </div>

      <div class="work_box">
        <div class="work_img">
          <img src={courseraJS2} alt="ballons" />
        </div>
        <div class="work_description">
          <span class="tag tag-purple">Popular</span>
          <h4>
            How to Keep Going When You Don’t Know What’s Next
          </h4>
          <p>
            The future can be scary, but there are ways to
            deal with that fear.
          </p>
        </div>
      </div>

      <div class="work_box">
        <div class="work_img">
          <img src={courseraWeb} alt="ballons" />
        </div>
        <div class="work_description">
          <span class="tag tag-purple">Popular</span>
          <h4>
            How to Keep Going When You Don’t Know What’s Next
          </h4>
          <p>
            The future can be scary, but there are ways to
            deal with that fear.
          </p>
        </div>
      </div>

      <div class="work_box">
        <div class="work_img">
          <img src={fccJS} alt="ballons" />
        </div>
        <div class="work_description">
          <span class="tag tag-purple">Popular</span>
          <h4>
            How to Keep Going When You Don’t Know What’s Next
          </h4>
          <p>
            The future can be scary, but there are ways to
            deal with that fear.
          </p>
        </div>
      </div>
      
    </div>
  </section>
}

export { Work }