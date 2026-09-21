const experience = [
  {
    company: "JioStar",
    role: "Staff SDET",
    period: "Aug 2022 — Present",
    location: "Remote",
    highlights: [
      "Owned performance qualification for marquee ICC events, validating Hotstar X at 80M concurrency and supporting growth from 26M to 72M peak concurrent users.",
      "Led central tools including Test Data Service, Endgame, Trap, MCP workflows, and a Slack on-call agent that cut support bandwidth by 50%.",
    ],
  },
  {
    company: "Blinkit",
    role: "Senior SDET",
    period: "Dec 2018 — Aug 2022",
    location: "Gurgaon, India",
    highlights: [
      "Built CI-integrated API automation with sub-2-minute feedback for all P0 microservices.",
      "Introduced Pact contract testing and Kubernetes-driven canary rollback automation to reduce release risk.",
    ],
  },
  {
    company: "Sirion Labs",
    role: "Automation Engineer",
    period: "Jun 2017 — Dec 2018",
    location: "Gurgaon, India",
    highlights: [
      "Created an Apache HttpClient API automation suite that made regression 3× faster.",
      "Established CI/CD practices that reduced deployment effort by 50%.",
    ],
  },
  {
    company: "Ola",
    role: "Software Development Test Engineer",
    period: "Apr 2016 — Jun 2017",
    location: "Bengaluru, India",
    highlights: [
      "Built Selenium and Appium coverage that reduced manual regression by 60% and covered 80% of priority mobile flows.",
      "Validated IMS-Cache reliability beyond 10K concurrent requests with Locust.",
    ],
  },
  {
    company: "Oracle",
    role: "Member of Technical Staff",
    period: "Jun 2014 — Apr 2016",
    location: "Bengaluru, India",
    highlights: [
      "Served as primary QA POC for BICS, owning infrastructure setup and feature validation.",
      "Supported a zero-disruption on-premise-to-cloud migration and strengthened the Selenium UI framework.",
    ],
  },
];

const capabilities = [
  {
    number: "01",
    title: "Automation frameworks",
    copy: "I build maintainable UI, API, mobile, and contract-testing frameworks that give teams fast, dependable feedback.",
    tools: "Selenium · Playwright · Appium · REST Assured · Pact",
  },
  {
    number: "02",
    title: "Load & performance testing",
    copy: "I design realistic workloads, run high-concurrency tests, and turn performance data into clear release and capacity decisions.",
    tools: "k6 · Locust · Grafana · New Relic",
  },
  {
    number: "03",
    title: "Internal quality tools",
    copy: "I create platforms, services, and AI-assisted tools that remove repetitive work and make quality easier across engineering teams.",
    tools: "Java · Python · Spring Boot · OpenAI API · MCP",
  },
  {
    number: "04",
    title: "CI/CD & release engineering",
    copy: "I embed quality checks into delivery pipelines and build safer release workflows with containers, cloud infrastructure, and automation.",
    tools: "Jenkins · Docker · Kubernetes · Terraform · AWS",
  },
];

const certificates = [
  {
    title: "Build and Deploy Anywhere with OpenAI GPT-5-Codex",
    category: "AI & agent engineering",
    date: "Jun 2026",
    provider: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/897dd9c6f27bd2083439473f38e73855cd74d6d6ef1e7cd952111",
  },
  {
    title: "Claude with Amazon Bedrock by Anthropic",
    category: "AI & agent engineering",
    date: "Jun 2026",
    provider: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/2a3e83e2a9c5523f484ecf47b84985fcd18198a6803d9cb1a86df",
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    category: "AI & agent engineering",
    date: "Apr 2026",
    provider: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/ad32dc958658492fb873bf4dd9162aa4d729b2d21dab80a9c4e16",
  },
  {
    title: "Java: Advanced Concepts for High-Performance Development",
    category: "Programming & frameworks",
    date: "Feb 2026",
    provider: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/6d623bc12bb87a2cb1f24ca200b163d2d5abe26591935186fb5f6",
  },
  {
    title: "Learning Playwright",
    category: "Automation & quality",
    date: "Oct 2025",
    provider: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/b2656e7e54419f5ee21b12cf5cc41985f004dce23e77b82b94929",
  },
  {
    title: "AI for Software Testers",
    category: "Automation & quality",
    date: "Sep 2025",
    provider: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/152aa342647f12f9268398de8a3e9d89e2d476cf661a5baf07391",
  },
  {
    title: "Test Automation with Selenium WebDriver for Java",
    category: "Automation & quality",
    date: "Sep 2025",
    provider: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/7b7fc6090367de7479c4c5d61ee723a2f80c987e30b3c84a845ef",
  },
  {
    title: "DevOps Foundations: Continuous Delivery / CI",
    category: "DevOps & cloud",
    date: "Aug 2025",
    provider: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/dbfc4fc42b83dcf1fc275e10bf8a4ac3d468682511d03cf06f5fc",
  },
  {
    title: "Learning Terraform",
    category: "DevOps & cloud",
    date: "May 2025",
    provider: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/1450a9357c574cd842d6b749ce8e25c71b42bedb67c7e793feb06",
  },
];

const projects = [
  {
    index: "01",
    label: "Performance at marquee-event scale",
    title: "Qualified Hotstar X for 80M concurrency",
    copy: "Owned the load strategy, gameday simulations, acceptance criteria, infrastructure setup, and capacity planning that supported platform growth from 26M to 72M peak concurrent users.",
    result: "26M → 72M peak users",
  },
  {
    index: "02",
    label: "AI-assisted operational tooling",
    title: "Cut on-call bandwidth by half",
    copy: "Built a Slack-integrated on-call agent and expanded internal platform access through MCP servers and reusable skills, making data and workflows available through plain-English interactions.",
    result: "50% less on-call bandwidth",
  },
  {
    index: "03",
    label: "Release confidence for P0 services",
    title: "Delivered quality feedback within two minutes",
    copy: "Developed and optimized an API automation framework integrated into CI for every P0 microservice, then added Pact contract testing and Kubernetes-driven canary rollback automation.",
    result: "<2 minute CI feedback",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="site-header">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Shiv Ashish, home">
            <span className="brand-mark">SA</span>
            <span className="brand-name">Shiv Ashish</span>
          </a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#certificates">Certificates</a>
          </div>
          <a className="nav-cta" href="https://www.linkedin.com/in/shiv-ashish/" target="_blank" rel="noreferrer">
            Let&apos;s connect <Arrow />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability"><span /> Staff SDET · India</div>
              <h1>I build the tools<br />behind <em>better software.</em></h1>
              <p className="hero-lede">I build automation frameworks, load-testing systems, and internal tools that help engineering teams find problems earlier and ship with confidence.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my impact <span aria-hidden="true">↓</span></a>
                <a className="button button-secondary" href="./Shiv_Ashish_Resume.pdf" download="Shiv_Ashish_Resume.pdf">Download resume (PDF) <span aria-hidden="true">↓</span></a>
              </div>
            </div>

            <aside className="hero-note" aria-label="Profile summary">
              <p className="note-kicker">The short version</p>
              <p className="note-quote">“If a quality problem can be solved with better tooling, I build it.”</p>
              <div className="note-rule" />
              <p className="note-body">12+ years building test frameworks, performance systems, delivery automation, and internal platforms for high-scale products.</p>
              <div className="signature" aria-hidden="true">SA</div>
            </aside>
          </div>

        </section>

        <section className="statement-band">
          <div className="shell statement-inner">
            <p>My edge</p>
            <h2>Automation frameworks. Load-testing systems. Internal tools. I build practical engineering solutions that improve software quality.</h2>
          </div>
        </section>

        <section className="section shell" id="work">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Selected impact</p>
              <h2>Impact that moved<br />the <em>needle.</em></h2>
            </div>
            <p className="section-intro">The three strongest outcomes from my resume—selected for scale, measurable value, and relevance to Staff SDET roles.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <span className="project-index">{project.index}</span>
                <div className="project-main">
                  <p className="project-label">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                </div>
                <div className="project-outcome">
                  <span>{project.result}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="resume-strip">
            <div>
              <p className="eyebrow">Full career details</p>
              <h3>Want the complete picture?</h3>
              <p>Download my resume for the full role history, technical toolkit, education, and certifications.</p>
            </div>
            <div className="resume-actions">
              <a className="button button-primary" href="./Shiv_Ashish_Resume.pdf" download="Shiv_Ashish_Resume.pdf">Download resume PDF <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="./Shiv_Ashish_Resume.pdf" target="_blank" rel="noreferrer">View in browser <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="section section-tint" id="capabilities">
          <div className="shell">
            <div className="section-heading split-heading compact-heading">
              <div>
                <p className="eyebrow">Core capabilities</p>
                <h2>Quality through<br /><em>engineering.</em></h2>
              </div>
              <p className="section-intro">I do more than test software. I build the frameworks, performance systems, and tools teams use to improve it.</p>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability-card" key={capability.number}>
                  <span className="capability-number">{capability.number}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                  <div>{capability.tools}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" id="experience">
          <div className="section-heading split-heading experience-heading">
            <div>
              <p className="eyebrow">Career journey</p>
              <h2>Built across<br /><em>five chapters.</em></h2>
            </div>
            <div className="education-note">
              <span>Education</span>
              <strong>B.Tech, Computer Science & Engineering</strong>
              <p>MNNIT Allahabad · 2010–2014</p>
            </div>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <article className="timeline-row" key={job.company}>
                <div className="timeline-meta">
                  <span className={index === 0 ? "timeline-dot current" : "timeline-dot"} />
                  <p>{job.period}</p>
                  <span>{job.location}</span>
                </div>
                <div className="timeline-role">
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>
                <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell certificates-section" id="certificates">
          <div className="section-heading certificate-heading">
            <div>
              <p className="eyebrow">Certificates</p>
              <h2>Evidence of a<br /><em>learning habit.</em></h2>
            </div>
            <div className="certificate-count">
              <strong>79</strong>
              <span>credential-backed learning records across five capability areas</span>
            </div>
          </div>

          <div className="category-strip" aria-label="Certificate categories">
            <span>Automation & Quality</span><span>AI Learning</span><span>DevOps</span><span>Programming & Frameworks</span><span>Professional Skills</span>
          </div>

          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <a className="certificate-card" href={certificate.url} target="_blank" rel="noreferrer" key={certificate.title}>
                <div className="certificate-top"><span className="certificate-medal">{String(index + 1).padStart(2, "0")}</span><Arrow /></div>
                <p className="certificate-category">{certificate.category}</p>
                <h3>{certificate.title}</h3>
                <div className="certificate-meta"><span>{certificate.provider}</span><span>{certificate.date}</span></div>
              </a>
            ))}
          </div>

          <div className="certificate-footer">
            <p>Every item above links directly to its public credential.</p>
            <a className="text-link" href="https://www.linkedin.com/in/shiv-ashish/details/certifications/" target="_blank" rel="noreferrer">Browse the full certification catalog <Arrow /></a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-inner">
            <p className="eyebrow eyebrow-light">Let&apos;s build dependable systems</p>
            <h2>Looking for an engineering leader who can make quality <em>everyone&apos;s advantage?</em></h2>
            <div className="contact-actions">
              <a className="button button-light" href="https://www.linkedin.com/in/shiv-ashish/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
              <a className="button button-outline-light" href="https://github.com/ShivAshishNiranjan" target="_blank" rel="noreferrer">Explore GitHub <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Shiv Ashish</span>
          <span>Staff SDET · Quality · Performance · DevEx</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
