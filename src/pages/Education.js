import educationInfo from '../data/education-data'
import utdEmblem from '../images/utd-emblem.png'

export default function Education() {

    const {header, subHeader, courseworkHeader, courses} = educationInfo
  
    return (
      <div className="education-grid">
        <section>
          <h1 className="header">{header}</h1>
          <h3>{subHeader}</h3>
        </section>
        <img src={utdEmblem} 
          className="utd-emblem"
          alt="University of Texas at Dallas Emblem" />
        <section>
          <h1 className="header">{courseworkHeader}</h1>
          <ul className="course-list">
            {courses.map(course => <li>{course}</li>)}
          </ul>
        </section>
      </div>
    )
  }