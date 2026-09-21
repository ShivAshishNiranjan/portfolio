import type { Metadata } from "next";
import { certificateCategories } from "./data";

export const metadata: Metadata = {
  title: "Certifications | Shiv Ashish",
  description: "79 certifications grouped across automation, AI, DevOps, programming, and professional skills.",
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function categoryId(title: string) {
  return title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export default function CertificationsPage() {
  const total = certificateCategories.reduce((sum, category) => sum + category.certificates.length, 0);

  return (
    <>
      <a className="skip-link" href="#catalog">Skip to certification catalog</a>
      <aside className="site-sidebar" aria-label="Certification navigation">
        <a className="sidebar-brand" href="../" aria-label="Shiv Ashish, portfolio home">
          <span className="brand-mark">SA</span>
          <span><strong>Shiv Ashish</strong><small>Certification catalog</small></span>
        </a>
        <nav className="sidebar-nav">
          <a href="../"><span>00</span>Portfolio home</a>
          {certificateCategories.map((category, index) => (
            <a href={`#${categoryId(category.title)}`} key={category.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>{category.title}
            </a>
          ))}
        </nav>
        <div className="sidebar-profile">
          <span>{total} verified credentials</span>
          <strong>{certificateCategories.length} capability areas</strong>
          <a href="https://www.linkedin.com/in/shiv-ashish/details/certifications/" target="_blank" rel="noreferrer">LinkedIn catalog <Arrow /></a>
        </div>
      </aside>

      <header className="site-header mobile-header">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="../" aria-label="Shiv Ashish, home">
            <span className="brand-mark">SA</span>
            <span className="brand-name">Shiv Ashish</span>
          </a>
          <div className="nav-links">
            <a href="../#experience">Experience</a>
            <a href="../#work">Work</a>
            <a href="#catalog" aria-current="page">Certificates</a>
          </div>
          <a className="nav-cta" href="https://www.linkedin.com/in/shiv-ashish/" target="_blank" rel="noreferrer">
            Let&apos;s connect <Arrow />
          </a>
        </nav>
      </header>

      <main className="page-content">
        <section className="catalog-hero shell">
          <div>
            <p className="eyebrow">Verified learning</p>
            <h1>Certification<br /><em>catalog.</em></h1>
            <p>Credential-backed learning across the technical and leadership areas that support my work as a Staff SDET.</p>
          </div>
          <div className="catalog-summary" aria-label={`${total} certifications across ${certificateCategories.length} categories`}>
            <strong>{total}</strong>
            <span>certifications</span>
            <strong>{certificateCategories.length}</strong>
            <span>capability areas</span>
          </div>
        </section>

        <nav className="catalog-index shell" aria-label="Certification categories">
          {certificateCategories.map((category, index) => (
            <a href={`#${categoryId(category.title)}`} key={category.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {category.title}
              <strong>{category.certificates.length}</strong>
            </a>
          ))}
        </nav>

        <div className="catalog shell" id="catalog">
          {certificateCategories.map((category, categoryIndex) => (
            <section className="catalog-group" id={categoryId(category.title)} key={category.title}>
              <header className="catalog-group-heading">
                <div>
                  <p className="eyebrow">Category {String(categoryIndex + 1).padStart(2, "0")}</p>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
                <strong>{category.certificates.length}</strong>
              </header>

              <div className="catalog-records">
                {category.certificates.map((certificate, index) => (
                  <a className="catalog-record" href={certificate.url} target="_blank" rel="noreferrer" key={`${certificate.title}-${certificate.date}`}>
                    <span className="catalog-record-index">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <p>{certificate.provider}</p>
                      <h3>{certificate.title}</h3>
                    </div>
                    <div className="catalog-record-meta">
                      <time dateTime={certificate.date}>{formatDate(certificate.date)}</time>
                      <Arrow />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="page-footer">
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Shiv Ashish</span>
          <span>Staff SDET · Quality · Performance · DevEx</span>
          <a href="../">Back to portfolio ↑</a>
        </div>
      </footer>
    </>
  );
}
