import educationInfo from '../data/education-data'
import utdEmblem from '../images/utd-emblem.png'

export default function Education() {

    const {header, subHeader, courseworkHeader, courses} = educationInfo
  
    return (
      <div className="education">
        <img src={utdEmblem} 
        className="utd-emblem"
        alt="University of Texas at Dallas Emblem" />
        <h1 className="ed-header header">{header}</h1>
        <h3 className="ed-subheader subheader">{subHeader}</h3>
        <h1 className="coursework-header header">{courseworkHeader}</h1>
        <ul className="course-list">
          {courses.map(course => <li>{course}</li>)}
        </ul>
      </div>
    )
  }