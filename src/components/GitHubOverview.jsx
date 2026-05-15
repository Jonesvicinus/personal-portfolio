import { personal, repos } from '../data/content'

export default function GitHubOverview() {
  return (
    <section id="github" className="github-overview">
      <div className="container">
        <h2 className="section-heading">GitHub Overview</h2>
        <a
          className="github-profile-btn"
          href={personal.github}
          target="_blank"
          rel="noreferrer"
        >
          View GitHub Profile →
        </a>
        <div className="github-repos">
          {repos.map((repo) => (
            <div key={repo.name} className="github-repo-row">
              <div className="github-repo-left">
                <div className="github-repo-name">{repo.name}</div>
                <div className="github-repo-desc">{repo.desc}</div>
              </div>
              <div className="github-repo-right">
                <span className="github-repo-lang">{repo.language}</span>
                <a
                  className="github-repo-link"
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
