import works from '../works.json';
import {WorkList} from '../components/WorkList';

function jsonToList() {

  
}

function Work() {
  const stringified  = JSON.stringify(works)
  const dataWorks = Object.entries(JSON.parse(stringified ))[1][1]

  return <section className="work" id="work">
    <div className="work_title title">
      <h2>Работы</h2>
      <p>В разделе представлены разработанные веб-приложения и полученные сертификаты</p>
    </div>
    
    <WorkList workList={dataWorks}/>

    
  </section>
}

export { Work }