import Project from '../components/Project'
import projects from '../data/projects-data'

export default function Projects() {
  
    return (
      <div className="under-nav">

        {projects.map((project) => (
          <Project 
            title={project.title} 
            subTitle={project.subTitle}
            info={project.info}
            link={project.link}
          />
          )
        )}

      </div>
    )
  }