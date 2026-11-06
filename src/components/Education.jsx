import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-heading reveal">Education &amp; Credentials</h2>
        {education.map((item, i) => (
          <div key={item.institution} className="edu-row reveal" data-delay={i + 1}>
            <div className="edu-left">
              <div className="edu-institution">{item.institution}</div>
              <div className="edu-details">{item.details}</div>
            </div>
            <div className="edu-date">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
