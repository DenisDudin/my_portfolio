import React from 'react';
import works from '../works.json';
import { WorkList } from '../components/WorkList';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.dataWorks = Object.entries(JSON.parse(JSON.stringify(works)))[1][1];
    this.technology = document.getElementById('all');
    this.workTags = ['all', 'react', 'javascript', 'html', 'css', 'certificate'];
  }

  state = {
    filterWorks: [],
    loading: true,
  };

  handleFilter = (tag) => {
    if (this.technology) {
      this.technology.classList.remove('active');
    }
    this.technology = document.getElementById(tag);
    this.technology.classList.add('active');

    this.setState({
      filterWorks: this.dataWorks.filter(({ technologies }) => {
        // console.log(technologies.idTech)
        for (let i = 0; i < technologies.length; i++) {
          if (technologies[i].technology.toLowerCase() === tag.toLowerCase()) {
            return this.dataWorks;
          }
        }
      }),
    });
  };

  // componentDidUpdate(prevState) {}

  render() {
    const { filterWorks } = this.state;

    return (
      <section className="work" id="work">
        <div className="work_title title">
          <h2>Работы</h2>
          <p>
            В разделе представлены разработанные веб-приложения и полученные
            сертификаты
          </p>
        </div>

        <ul className="work_technologies">
          {this.workTags.map((tag) => (
              <li>
              <button id={tag} onClick={() => this.handleFilter(tag)}>
                {tag}
              </button>
            </li>
          ))}
        </ul>
        {!filterWorks.length ? (
          <WorkList workList={this.dataWorks} />
        ) : (
          <WorkList workList={this.state.filterWorks} />
        )}
      </section>
    );
  }
}

export { Work };
