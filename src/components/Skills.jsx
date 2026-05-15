import { skills } from '../data/content'

export default function Skills() {
  const half = Math.ceil(skills.length / 2)
  const left = skills.slice(0, half)
  const right = skills.slice(half)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-heading">Tools &amp; Skills</h2>
        <div className="skills-grid">
          <div>
            {left.map(skill => (
              <div key={skill.name} className="skill-row">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-cat">{skill.category}</span>
              </div>
            ))}
          </div>
          <div>
            {right.map(skill => (
              <div key={skill.name} className="skill-row">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-cat">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
