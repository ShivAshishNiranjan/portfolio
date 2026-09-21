import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Shiv Ashish",
  description: "Shiv Ashish resume with experience, skills, education, and certifications.",
};

const experience = [
  {
    role: "Staff SDET",
    company: "Disney+ Hotstar",
    location: "Remote",
    period: "Aug 2022 - Present",
    highlights: [
      "Owned performance qualification for the Hotstar X platform, defining load testing strategy, gameday simulations, acceptance criteria, infrastructure setup, and capacity planning for marquee ICC events, supporting platform growth from 26M to 72M peak concurrent users and validating performance at 80M concurrency.",
      "Led a team of 4 in the Central Tools team to deliver and evolve internal productivity platforms, including a Spring Boot-based Test Data Service, the Endgame backend automation framework, and Trap for chaos and panic testing, improving developer and QA efficiency across teams.",
      "Expanded adoption of internal tools through MCP servers and reusable skills that made data and workflows accessible via plain-English interactions, and cut on-call bandwidth by 50% by building a Slack-integrated oncall agent.",
    ],
  },
  {
    role: "Senior SDET",
    company: "Blinkit",
    location: "Gurgaon, India",
    period: "Dec 2018 - Aug 2022",
    highlights: [
      "Developed and optimized an API automation framework integrated into the CI pipeline, delivering feedback within 2 minutes for all P0 microservices.",
      "Implemented consumer-driven contract tests using Pact, improving confidence in microservices integration and reducing release defects.",
      "Created an in-house automation with Kubernetes CLI to trigger instant rollbacks from canary pod feedback, minimizing release risks.",
    ],
  },
  {
    role: "Automation Engineer",
    company: "Sirion Labs",
    location: "Gurgaon, India",
    period: "Jun 2017 - Dec 2018",
    highlights: [
      "Developed an API automation suite with Apache HttpClient, cutting manual testing effort for key REST APIs and improving regression speed by 3x.",
      "Established CI/CD practices to streamline workflows, reducing deployment effort by 50% and improving delivery consistency.",
    ],
  },
  {
    role: "Software Development Test Engineer",
    company: "Ola",
    location: "Bengaluru, India",
    period: "Apr 2016 - Jun 2017",
    highlights: [
      "Built a Selenium WebDriver-based web automation framework for the Ola Growth team, reducing manual regression effort by 60% and increasing test coverage across critical user journeys.",
      "Designed and implemented a mobile app automation framework with Appium, achieving 80% coverage of high-priority flows across Android.",
      "Performed large-scale load testing of IMS-Cache APIs using Locust, validating system scalability and ensuring reliability under 10K+ concurrent requests.",
    ],
  },
  {
    role: "Member of Technical Staff",
    company: "Oracle",
    location: "Bengaluru, India",
    period: "Jun 2014 - Apr 2016",
    highlights: [
      "Owned infrastructure setup and feature validation as the primary POC for the BICS QA team, ensuring 100% migration success from on-prem to cloud with minimal disruption.",
      "Contributed enhancements to the existing Selenium WebDriver UI automation framework.",
    ],
  },
];

const skillGroups = [
  ["Technical Leadership & Architecture", ["Test Architecture", "Automation Frameworks", "CI/CD Orchestration", "Performance & Scalability", "Spring Boot", "Flask"]],
  ["AI & Engineering Productivity", ["Claude", "ChatGPT", "GitHub Copilot", "Prompt Engineering", "AI-Driven Workflow Automation", "LLM Integration"]],
  ["Test Automation", ["BDD", "Cucumber", "Gherkin", "Playwright", "Selenium WebDriver", "Appium", "REST Assured", "Karate", "Pact", "Apache HttpClient", "Postman", "JUnit", "TestNG", "Allure", "Extent Reports"]],
  ["Performance, Resiliency & Observability", ["Vegeta", "Gatling", "Locust", "Chaosblade", "Grafana", "AWS CloudWatch", "Coralogix", "MySQL", "PostgreSQL", "Redis"]],
  ["Cloud & DevOps", ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Git", "Jenkins", "Harness", "GitHub Actions", "Pipeline as Code", "Infrastructure as Code"]],
  ["Programming & Fundamentals", ["Core Java", "C++", "Python", "Groovy", "Shell Scripting", "Data Structures", "Algorithms", "OOP Principles"]],
] as const;

export default function ResumePage() {
  return (
    <main className="resume-page">
      <nav className="resume-toolbar" aria-label="Resume actions">
        <a href="../">← Back to portfolio</a>
        <a className="resume-download" href="../Shiv_Ashish_Resume_April_2026.docx" download="Shiv_Ashish_Resume_April_2026.docx">
          Download resume <span aria-hidden="true">↓</span>
        </a>
      </nav>

      <article className="resume-document">
        <header className="resume-header">
          <h1>Shiv Ashish</h1>
          <p className="resume-role">Staff SDET · 12 Years Experience</p>
          <p className="resume-contact">
            <a href="mailto:san.mnnit11@gmail.com">san.mnnit11@gmail.com</a>
            <span>|</span>
            <a href="tel:+918105234517">+91 8105234517</a>
            <span>|</span>
            <a href="https://www.linkedin.com/in/shiv-ashish/" target="_blank" rel="noreferrer">linkedin.com/in/shiv-ashish</a>
            <span>|</span>
            <a href="https://shivashishniranjan.github.io/portfolio/" target="_blank" rel="noreferrer">Portfolio</a>
            <span>|</span>
            <span>Lalitpur, UP</span>
          </p>
        </header>

        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>Staff SDET with 12 years of experience driving engineering productivity, release quality, and platform reliability at scale. Built and led automation frameworks, internal developer tools, performance validation systems, and AI-assisted operational workflows across high-growth and high-scale environments. Known for combining deep technical execution with team leadership to accelerate delivery, strengthen release confidence, and improve system resilience.</p>
        </section>

        <section className="resume-section">
          <h2>Work Experience</h2>
          <div className="resume-experience-list">
            {experience.map((job) => (
              <section className="resume-job" key={`${job.company}-${job.role}`}>
                <h3>{job.role} <span>|</span> <strong>{job.company}</strong> <span>|</span> {job.location} <span>|</span> <time>{job.period}</time></h3>
                <ul>
                  {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Core Skills</h2>
          <div className="resume-skills">
            {skillGroups.map(([group, skills]) => (
              <section key={group}>
                <h3>{group}</h3>
                <p>{skills.join(" · ")}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="resume-section resume-two-column">
          <div>
            <h2>Education</h2>
            <h3>B.Tech in Computer Science & Engineering</h3>
            <p>Motilal Nehru National Institute of Technology (MNNIT)</p>
            <p>Jul 2010 - Jul 2014 · GPA 7.3</p>
          </div>
          <div>
            <h2>Certifications</h2>
            <a className="resume-resource-link" href="https://shivashishniranjan.github.io/portfolio/certifications/" target="_blank" rel="noreferrer">
              View certifications <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
