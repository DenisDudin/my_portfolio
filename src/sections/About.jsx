import photoAbout from '../img/photo-about.jpg';

function About() {
  return <section className="about" id="about">
    <div className="about_title title white">
      <h2>Обо мне</h2>
      <p>В этом блоке рассказано немного обо мне, моем пути и опыте, который я приобрел.</p>
    </div>
    <div className="about_content">
      <div className="about_text">
        <p>В 2021 году получил магистрскую степень по информационной безопасности, но по этой стезе не пошел. На данный момент почти как два года являюсь индивидуальным предпринимателем. Занимаюь поставкой контрольно-измерительного и лабораторного оборудования.</p>
        <p>Почему я бросаю свое дело и ухожу в программирование? Мне хочется создавать что-то новое, совершенствовать продукт и совершенствоваться самому, а также это просто творческое занятие, которое мне нравится.</p> 
        <p>Изучать программирование я начал еще в университете, программировал на Pascal, C++, Java и Python, но кроме последнего языка все было поверхностно, только в рамках учебы. Выбрав не так давно для себя направление frontend-разработки начал изучать язык при помощи курсов и книг. За время обучения было получено несколько сертификатов, прочитаны пару книг и пройдены курсы. Приобретенные знания применены в представленных ниже проектах.</p>
        <p>В настоящее время продолжаю подтягивать свои знания по HTML и его доступности, практикуюсь с анимацией на CSS и различными библиотеками, изучаю написание сайтов с использованием React.</p>
      </div>
      <div className="about_img">
        <img src={photoAbout} alt="My photo" width="380" height="550"/>
      </div>
    </div>
  </section>
}

export { About }