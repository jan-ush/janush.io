const projects = [
  {
    name: "Project One",
    description:
      "A short description of something you built, studied, designed, or shipped.",
  },
  {
    name: "Project Two",
    description:
      "Add another project here when you are ready to expand the portfolio.",
  },
];

const links = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home" className="brand">
          janush
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Build a simple first impression for your domain.</h1>
        <p className="intro">
          Replace this text with a short introduction about who you are, what
          you do, and what kind of work you want people to remember.
        </p>
        <div className="actions">
          <a className="button primary" href="#work">
            View work
          </a>
          <a className="button secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </section>

      <section className="content-grid" aria-label="Portfolio details">
        <article className="panel">
          <p className="section-label">About</p>
          <h2>Focused, clear, and easy to update.</h2>
          <p>
            This template is intentionally compact: one page, simple sections,
            and plain text that can be edited quickly. Add images, case studies,
            a blog, or a projects database when you need them.
          </p>
        </article>

        <article id="work" className="panel">
          <p className="section-label">Selected Work</p>
          <div className="project-list">
            {projects.map((project) => (
              <div className="project" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article id="contact" className="panel contact-panel">
          <p className="section-label">Contact</p>
          <h2>Ready for your real links.</h2>
          <p>
            Update the email, GitHub, and LinkedIn URLs in{" "}
            <code>app/page.tsx</code>. You can add a resume, newsletter, or
            booking link later.
          </p>
          <div className="contact-links">
            {links.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
