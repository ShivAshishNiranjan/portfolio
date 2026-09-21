import Image from "next/image";
import profileImage from "../public/shiv-ashish-profile.png";

const experience = [
  {
    company: "JioHotstar",
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

const skillGroups = [
  {
    icon: "⌘",
    title: "Technical Leadership & Architecture",
    keywords: ["Test Architecture", "Automation Frameworks", "CI/CD Orchestration", "Performance & Scalability", "Spring Boot", "Flask"],
  },
  {
    icon: "✦",
    title: "AI & Engineering Productivity",
    keywords: ["Claude", "ChatGPT", "GitHub Copilot", "Prompt Engineering", "AI-Driven Workflow Automation", "LLM Integration"],
  },
  {
    icon: "✓",
    title: "Test Automation",
    keywords: ["BDD", "Cucumber", "Gherkin", "Hybrid Frameworks", "Data-Driven", "Keyword-Driven", "Playwright", "Selenium WebDriver", "Appium", "REST Assured", "Karate", "Pact", "Apache HttpClient", "Postman", "JUnit", "TestNG", "Allure", "Extent Reports"],
  },
  {
    icon: "↗",
    title: "Performance, Resiliency & Observability",
    keywords: ["Vegeta", "Gatling", "Locust", "Chaosblade", "Grafana", "AWS CloudWatch", "Coralogix", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    keywords: ["AWS EC2", "S3", "Lambda", "ECS", "EKS", "RDS", "Aurora", "GCP Compute Engine", "Cloud Storage", "Docker", "Kubernetes", "Terraform", "Git", "Jenkins", "Harness", "GitHub Actions", "Pipeline as Code", "Infrastructure as Code"],
  },
  {
    icon: "</>",
    title: "Programming & Fundamentals",
    keywords: ["Core Java", "C++", "Python", "Groovy", "Shell Scripting", "Data Structures", "Algorithms", "OOP Principles"],
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
      <aside className="site-sidebar" aria-label="Portfolio navigation">
        <a className="sidebar-brand" href="#top" aria-label="Shiv Ashish, home">
          <span className="brand-mark">SA</span>
          <span><strong>Shiv Ashish</strong><small>Quality Engineering Leader</small></span>
        </a>
        <nav className="sidebar-nav">
          <a href="#top"><span>01</span>Overview</a>
          <a href="#experience"><span>02</span>Experience</a>
          <a href="#work"><span>03</span>Impact</a>
          <a href="#skills"><span>04</span>Technical skills</a>
          <a href="./certifications/"><span>05</span>Certificates</a>
          <a href="#contact"><span>06</span>Contact</a>
        </nav>
        <div className="sidebar-profile">
          <span>Staff SDET</span>
          <strong>JioHotstar</strong>
          <a href="https://www.linkedin.com/in/shiv-ashish/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
        </div>
      </aside>

      <header className="site-header mobile-header">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Shiv Ashish, home">
            <span className="brand-mark">SA</span>
            <span className="brand-name">Shiv Ashish</span>
          </a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="./certifications/">Certificates</a>
          </div>
          <a className="nav-cta" href="https://www.linkedin.com/in/shiv-ashish/" target="_blank" rel="noreferrer">
            Let&apos;s connect <Arrow />
          </a>
        </nav>
      </header>

      <main className="page-content" id="main">
        <section className="hero shell" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability"><span /> Staff SDET · JioHotstar</div>
              <h1>Quality engineering leader building systems that help teams <em>ship faster and safer at scale.</em></h1>
              <p className="hero-lede">Staff SDET with 12+ years driving engineering productivity, release quality, and platform reliability at scale. I build automation frameworks, internal developer tools, performance validation systems, and AI-assisted workflows.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my impact <span aria-hidden="true">↓</span></a>
                <a className="button button-secondary" href="./Shiv_Ashish_Resume_April_2026.docx" download="Shiv_Ashish_Resume_April_2026.docx">Download resume <span aria-hidden="true">↓</span></a>
                <a className="hero-view-link" href="./resume/" target="_blank" rel="noreferrer">View in browser <Arrow /></a>
              </div>
            </div>

            <aside className="hero-note" aria-label="Profile summary">
              <div className="note-profile">
                <Image className="profile-photo" src={profileImage} alt="Shiv Ashish" priority />
                <div>
                  <strong>Shiv Ashish</strong>
                </div>
              </div>
              <p className="note-quote">“Turning quality engineering into an accelerator for faster, safer releases.”</p>
              <div className="note-rule" />
            </aside>
          </div>

        </section>

        <section className="section shell experience-section" id="experience">
          <div className="section-heading split-heading experience-heading">
            <div>
              <p className="eyebrow">Career journey</p>
              <h2>Built across<br /><em>five chapters.</em></h2>
            </div>
            <div className="education-note">
              <span>Education</span>
              <strong>B.Tech, Computer Science & Engineering</strong>
              <p>MNNIT Allahabad · 2010–2014 · GPA 7.3/10</p>
            </div>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <article className={index === 0 ? "timeline-row current-role" : "timeline-row"} key={job.company}>
                <div className="timeline-heading">
                  <h3>{job.role}</h3>
                  <span className="timeline-separator" aria-hidden="true">|</span>
                  <strong>{job.company}</strong>
                  <span className="timeline-separator" aria-hidden="true">|</span>
                  <span>{job.location}</span>
                  <span className="timeline-separator" aria-hidden="true">|</span>
                  <time>{job.period}</time>
                </div>
                <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="statement-band">
          <div className="shell statement-inner">
            <p>My edge</p>
            <h2>From automation frameworks to internal platforms, I turn quality challenges into engineering systems teams can rely on.</h2>
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
        </section>

        <section className="section skills-section" id="skills">
          <div className="shell">
            <div className="section-heading split-heading compact-heading">
              <div>
                <p className="eyebrow">Technical toolkit</p>
                <h2>Skills built through<br /><em>real systems.</em></h2>
              </div>
              <p className="section-intro">A practical toolkit spanning architecture, automation, performance, AI-assisted engineering, cloud delivery, and production reliability.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <header>
                    <span className="skill-icon" aria-hidden="true">{group.icon}</span>
                    <h3>{group.title}</h3>
                  </header>
                  <div className="skill-keywords">
                    {group.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
                  </div>
                </article>
              ))}
            </div>
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

      <footer className="page-footer">
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Shiv Ashish</span>
          <span>Staff SDET · Quality · Performance · DevEx</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
