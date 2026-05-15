import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-heading">Recent Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.num} className="project-card">
              <a
                className="project-card-image"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-card-overlay">View on GitHub</div>
              </a>
              <div className="project-card-body">
                <div className="project-card-num">{project.num}</div>
                <h3 className="project-card-title">{project.title}</h3>
                <div className="project-card-desc">{project.desc}</div>
                <div className="project-card-footer">
                  <div className="project-card-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-card-tag">{tag}</span>
                    ))}
                  </div>
                  <a
                    className="project-card-gh"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
