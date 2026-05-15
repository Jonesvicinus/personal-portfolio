import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-heading">Education &amp; Credentials</h2>
        {education.map((item) => (
          <div key={item.institution} className="edu-row">
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
