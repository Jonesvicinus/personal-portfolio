import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-heading reveal">Experience</h2>
        {experience.map((item, i) => (
          <div key={item.org} className="exp-row reveal" data-delay={Math.min(i + 1, 4)}>
            <div className="exp-head">
              <div>
                <h3 className="exp-org">{item.org}</h3>
                <div className="exp-role">
                  {item.role}
                  {item.link && (
                    <>
                      {' · '}
                      <a className="exp-link" href={item.link} target="_blank" rel="noreferrer">
                        {item.linkLabel} ↗
                      </a>
                    </>
                  )}
                </div>
              </div>
              <div className="exp-date">{item.date}</div>
            </div>
            <ul className="exp-bullets">
              {item.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
            {item.tags.length > 0 && (
              <div className="project-card-tags">
                {item.tags.map(tag => (
                  <span key={tag} className="project-card-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
