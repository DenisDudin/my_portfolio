function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience_title title">
        <h2>Опыт</h2>
      </div>
      <div className="experience_content">
        <div className="experience_left side">
          <h2>Образование</h2>
          <div className="experience_box">
            <h4>2019 - 2021</h4>
            <h3>МГТУ им. Баумана</h3>
            <p>
              Магистратура.
              <br />
              Факультет информатики и систем управления.
              <br />
              Информационная безопасность.
            </p>
          </div>
          {/* experience_box */}

          <div className="experience_box">
            <h4>2015 - 2019</h4>
            <h3>БГТУ им. Шухова</h3>
            <p>
              Бакалавриат.
              <br /> Факультет программного обеспечения вычислительной техники и
              автоматизированных систем.
              <br />
              Информатика и вычислительная техника.
            </p>
          </div>
          {/* experience_box */}

          <div className="experience_skills">
            <h3>SKILLS </h3>
            <ul>
              <li>Знания HTML5, CSS3, JavaScript ~</li>
              <li>Работа с React ~</li>
              <li>Использование Git ~</li>
              <li>Знание алгоритмов и структур данных ~</li>
              <li>Английский язык (Pre-intermidate) ~</li>
            </ul>
          </div>
        </div>
        {/* experience_left */}

        <div className="experience_right side">
          <h2>Опыт работы</h2>
          <div className="experience_box">
            <h4>Май 2020 - ...</h4>
            <h3>Индивидуальный предприниматель</h3>
            <p>Обязанности:</p>
            <ul>
              <li>Подготовка и продажа оборудования;</li>
              <li>
                Заключение сделок и поддержание партнерства с другими
                компаниями;
              </li>
              <li>
                Работа с рекламными площадками, их настройка и раскрутка
                товара.
              </li>
            </ul>
            <p>Достижения:</p>
            <ul>
              <li>Прибыль за 2021 ~1 200 000руб.;</li>
              <li>Написал несколько парсеров.</li>
            </ul>
          </div>
          {/* experience_box */}

          <div className="experience_box">
            <h4>Январь 2020 - Март 2020</h4>
            <h3>IT-аудитор</h3>
            <h3 className="experience_place">АО "Mazars"</h3>
            <p>Обязанности:</p>
            <ul>
              <li>
                Проверка компаний на соответствие международным стандартам в
                области ИБ;
              </li>
              <li>
                Обнаружение ошибок и нарушений в проведенных транзакциях
                компаний;
              </li>
              <li>Cоставление ITGC и ITAC тестов;</li>
              <li>Написание JET тестов.</li>
            </ul>
            <p>Достижения:</p>
            <ul>
              <li>Проведено 5 проврок компаний;</li>
              <li>Составлено 5 JET тестов и 2 ITGC теста.</li>
            </ul>
          </div>
          {/* experience_box */}
        </div>
      </div>
    </section>
  );
}

export { Experience };
