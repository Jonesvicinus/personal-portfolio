import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-heading">Experience</h2>
        {experience.map((job) => (
          <div key={`${job.company}-${job.date}`} className="exp-row">
            <div className="exp-left">
              <div className="exp-date">{job.date}</div>
              <div className="exp-location">{job.location}</div>
            </div>
            <div className="exp-main">
              <h3 className="exp-role">{job.role}</h3>
              <div className="exp-company">
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noreferrer">{job.company}</a>
                ) : job.company}
              </div>
              <ul className="exp-bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="exp-tags">
                {job.tags.map((tag) => (
                  <span key={tag} className="project-card-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
