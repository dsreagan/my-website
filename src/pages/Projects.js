import Project from '../components/Project'
import projects from '../data/projects-data'

export default function Projects() {
  
    return (
      <div className="projects">
        {projects.map((project) => (
          <Project 
            title={project.title}
            subTitle={project.subTitle}
            info={project.info}
            url={project.url}
            gitRepo={project.gitRepo}
          />
          )
        )}
      </div>
    )
  }