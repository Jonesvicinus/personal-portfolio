import { personal, heroTags } from '../data/content'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-sidebar">
        <div className="hero-photo">
          <div className="hero-photo-placeholder">Photo</div>
        </div>
        <div className="hero-name">{personal.name}</div>
        <div className="hero-role">{personal.role}</div>
        <div className="hero-socials">
          <a
            className="hero-social-btn"
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            GH
          </a>
          <a
            className="hero-social-btn"
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            LI
          </a>
          <a
            className="hero-social-btn"
            href={`mailto:${personal.email}`}
            title="Email"
          >
            @
          </a>
        </div>
      </div>

      <div className="hero-main">
        <div className="hero-eyebrow">Portfolio · 2026</div>
        <h1 className="hero-headline">
          Computer<br />Science<br />Student
        </h1>
        <p className="hero-bio">{personal.bio}</p>
        <div className="hero-tags">
          {heroTags.map(tag => (
            <span key={tag} className="hero-tag">{tag}</span>
          ))}
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">3+</div>
            <div className="hero-stat-lbl">Projects</div>
          </div>
          <div>
            <div className="hero-stat-num">2</div>
            <div className="hero-stat-lbl">Internships</div>
          </div>
          <div>
            <div className="hero-stat-num">1</div>
            <div className="hero-stat-lbl">Certificate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
