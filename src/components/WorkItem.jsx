function WorkItem(props) {
  const {
    name,
    description,
    date,
    linkSite,
    linkCode,
    technologies,
    imgProject,
  } = props;

  const handleColor = (el) => {
    let colorTag = '';
    switch (el.idTech) {
      case 'a':
        colorTag = 'react-color';
        break;
      case 'b':
        colorTag = 'js-color';
        break;
      case 'c':
        colorTag = 'css-color';
        break;
      case 'd':
        colorTag = 'html-color';
        break;
      case 'e':
        colorTag = 'other-color';
        break;

      default:
        colorTag = '';
    }
    const styleTag = `tag ${colorTag}`;

    return (
      <span key={el.idTech} className={styleTag}>
        {el.technology}
      </span>
    );
  };

  return (
    <div className="work_box">
      <div className="work_img shine">
        <figure>
          <a href={linkSite} target="_blank">
            <img src={imgProject} alt="work image" />
          </a>
        </figure>
      </div>
      <div className="work_description">
        <div className="work_tags">
          {technologies.map((el) => handleColor(el))}
        </div>

        <h4>{name}</h4>

        <div className="work_date">
          <span>{date}</span>
        </div>

        <p>{description}</p>
      </div>
      <div className="work_links">
        <button className="work_view">
          <a href={linkSite} target="_blank">
            Просмотр
          </a>
        </button>
        {linkCode ? (
          <button className="work_code ">
            <a href={linkCode} target="_blank">
              Код проекта
            </a>
          </button>
        ) : null}
      </div>
    </div>
  );
}

export { WorkItem };
