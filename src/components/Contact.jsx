import { personal } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-heading">Let&rsquo;s Connect</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/[FORMSPREE_FORM_ID]"
          method="POST"
        >
          <input
            className="contact-field"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="contact-field"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="contact-field contact-textarea"
            name="message"
            placeholder="Message"
            required
          />
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
        <div className="contact-info">
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
          <a href={personal.github} target="_blank" rel="noreferrer">
            github.com/{personal.githubUsername}
          </a>
        </div>
      </div>
    </section>
  )
}
