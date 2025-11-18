const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const resumeData = {
  name: "Arush Jain",
  title: "Software Engineer & Product Builder",
  location: "Morris Plains, NJ · Open to relocation",
  tagline: "Passionate Software Engineer Seeking Out Meaninful Opportunitiees and Experiences",
  email: "arushj99@gmail.com",
  phone: "(973) 960-6958",
  github: "https://github.com/arushj99",
  linkedin: "https://www.linkedin.com/in/arush-jain1/",
  heroStats: [
    { label: "Repositories migrated", value: "400+", detail: "Mission-critical repos moved to GitHub at PURE Insurance." },
    { label: "Accuracy achieved", value: "66%", detail: "Falls amongst top industry grade autism detection models." },
    { label: "Learners supported", value: "500+", detail: "Students served by Engage’s NLP-powered teaching assistant." },
  ],
  education: {
    school: "University of Maryland · B.S. Computer Science (Mathematics minor)",
    graduation: "Class of 2027",
    coursework: ["Data Structures", "Computer Architecture", "Probability & Statistics", "Discrete Math", "Linear Algebra"],
  },
  skills: {
    languages: ["Python", "Java", "C", "TypeScript", "JavaScript", "SQL", "Rust", "OCaml", "x86-64 Assembly"],
    frameworks: ["React", "Node.js", "FastAPI", "Flask", "Express", "MongoDB", "Supabase", "Docker", "GraphQL", "Spring Boot"],
    awards: ["Bitcamp Hackathon · 1st place", "MCST Hackathon · 3rd place"],
  },
  leadership: ["Maryland Mauj Executive Board", "Squash Club Team Founder & Captain", "App Development Club", "Hack4Impact"],
};

const experiences = [
  {
    company: "PURE Insurance",
    role: "Software Engineering Intern",
    period: "May 2025 – Aug 2025",
    location: "White Plains, NY",
    highlights: [
      "Migrated 400+ AWS CodeCommit repositories to GitHub covering claims, billing, and policy platforms.",
      "Piloted MuleSoft migration with 50+ contributors and 10+ integrations, defining tooling, access policies, and validation workflows.",
      "Developed a Python automation framework that cloned repos, mapped IAM permissions to GitHub, wired webhooks, and cut manual effort to under 10 minutes.",
      "Integrated the framework with GitHub API, AWS CLI, and CI/CD pipelines to safeguard branch history and configuration parity.",
    ],
    stack: ["Python", "AWS", "GitHub API", "CI/CD"],
  },
  {
    company: "Children's National Hospital",
    role: "Software Engineer",
    period: "Jan 2025 – May 2025",
    location: "College Park, MD",
    highlights: [
      "Built a medical imaging platform that renders 116 fMRI brain regions in synchronized 2D and 3D views.",
      "Trained a neural network for automated autism detection achieving 66% accuracy while reducing diagnostic review to <10 minutes across 500+ scans.",
      "Implemented a secure data management system with two-factor auth that maintained HIPAA compliance for 10+ clinicians.",
      "Architected a React/Vite + FastAPI + Supabase + Docker pipeline processing 1GB+ NIfTI files with sub-200ms API response times.",
    ],
    stack: ["React", "FastAPI", "Supabase", "Docker"],
  },
  {
    company: "Engage",
    role: "Software Engineer",
    period: "Sep 2024 – Dec 2024",
    location: "College Park, MD",
    highlights: [
      "Designed and deployed an NLP-powered teaching assistant adopted across seven districts with 500+ active students.",
      "Transcribed 50-minute lecture recordings using Whisper and enriched transcripts with spaCy for entity labeling.",
      "Maintained a Dockerized Qdrant vector database that indexed timestamped lessons for low-latency retrieval.",
      "Connected student queries to Llama 3.2 via LangChain, enabling contextual RAG responses in under two seconds.",
    ],
    stack: ["Python", "LangChain", "Qdrant", "Docker"],
  },
  {
    company: "Xficient Inc.",
    role: "Software Engineering Intern",
    period: "May 2024 – Aug 2024",
    location: "McLean, VA",
    highlights: [
      "Developed a data extraction pipeline and document schema for five high-volume healthcare forms using OCR.",
      "Automated summaries and benefit explanations to accelerate claim review for customer success teams.",
      "Improved entity accuracy and relevancy by 45% through BERT-based named entity recognition.",
    ],
    stack: ["Python", "OCR", "BERT"],
  },
];

const projects = [
  {
    name: "Jiggy",
    date: "Apr 2025",
    description: "A real-time video streaming platform that helps dancers learn collaboratively with instant feedback.",
    image: "assets/jiggy.jpg",
    imageAlt: "Jiggy interface comparing two dancers side by side",
    bullets: [
      "Shipped sleek upload & streaming flows that boosted returning users and engagement time.",
      "Integrated MediaPipe for pose segmentation and skeleton comparison, surfacing 30° deviation alerts with visual cues.",
      "Combined WebRTC + Socket.io + Flask services to broadcast synchronized sessions at scale.",
    ],
    stack: ["MediaPipe", "WebRTC", "Node.js", "Flask", "Socket.io"],
  },
  {
    name: "Course Catalog Chatbot",
    date: "May 2024",
    description: "Chatbot that lets students query uploaded course catalogs with natural-language prompts.",
    image: "assets/xficient-bot.jpg",
    imageAlt: "Dark interface of the Xficient knowledge bot",
    link: "https://devpost.com/software/xficient-bot",
    bullets: [
      "Parsed PDFs with PDF2 and NLTK, clustering data via scikit-learn and Pandas for efficient retrieval.",
      "Integrated GPT API with LangChain to deliver intuitive, citation-backed answers.",
      "Deployed a Streamlit UI enabling faculty to test and monitor catalog ingestion pipelines.",
    ],
    stack: ["PDF2", "NLTK", "GPT API", "LangChain", "Streamlit"],
  },
  {
    name: "S&P 500 Stock Predictor Web",
    date: "Sep 2022",
    description: "LSTM-powered forecasting tool that surfaces market trends from five years of prices scraped via Yahoo Finance.",
    bullets: [
      "Implemented short-term memory networks with Adam optimization and rolling window analysis for improved predictive stability.",
      "Built a Streamlit-based dashboard for scenario testing, filters, and Matplotlib visualizations.",
    ],
    stack: ["LSTM", "BeautifulSoup", "Streamlit", "Matplotlib"],
  },
];

const contactLinks = [
  { label: "Email", value: resumeData.email, href: `mailto:${resumeData.email}` },
  { label: "Phone", value: resumeData.phone, href: `tel:${resumeData.phone.replace(/[^0-9]/g, "")}` },
  { label: "GitHub", value: "arushj99", href: resumeData.github },
  { label: "LinkedIn", value: "arush-jain1", href: resumeData.linkedin },
];

const FloatingNav = ({ activeSection }) => (
  <nav className="floating-nav">
    {navItems.map((item) => (
      <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? "active" : ""}>
        {item.label}
      </a>
    ))}
    <a className="pill-button" href={`mailto:${resumeData.email}`}>
      Say hello
    </a>
  </nav>
);

const ProfileSidebar = () => (
  <aside className="profile-panel">
    <div className="headshot">
      <img src="headshot.jpg" alt="Arush Jain smiling at a restaurant" />
    </div>
    <p className="eyebrow">Arush Jain</p>
    <h1>{resumeData.title}</h1>
    <p className="sidebar-summary">{resumeData.location}</p>
    <p className="sidebar-summary">{resumeData.summary}</p>
    <div className="contact-list">
      {contactLinks.map((link) => (
        <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">
          <span>{link.label}</span>
          <strong>{link.value}</strong>
        </a>
      ))}
    </div>
    <div className="tag-grid">
      {resumeData.skills.languages.slice(0, 6).map((skill) => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
    <div className="sidebar-actions">
      <a className="pill-button primary" href={resumeData.linkedin} target="_blank" rel="noreferrer">
        Connect on LinkedIn
      </a>
      <a className="pill-button ghost" href={resumeData.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  </aside>
);

const HeroSection = () => (
  <section id="about" className="panel hero-panel">
    <p className="eyebrow">Currently @ University of Maryland · Class of 2027</p>
    <h2>{resumeData.tagline}</h2>
    <p className="lead">{resumeData.summary}</p>
    <div className="cta-row">
      <a className="pill-button primary" href={`mailto:${resumeData.email}`}>
        Collaborate
      </a>
      <a className="pill-button ghost" href={resumeData.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a className="pill-button ghost" href={resumeData.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
    <ul className="stat-grid">
      {resumeData.heroStats.map((stat) => (
        <li key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
          <p>{stat.detail}</p>
        </li>
      ))}
    </ul>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="panel">
    <header className="section-heading">
      <div>
        <h2>Experience</h2>
      </div>
    </header>
    <div className="timeline">
      {experiences.map((experience) => (
        <article key={experience.company} className="timeline-card">
          <div className="timeline-meta">
            <p>
              {experience.period} · {experience.location}
            </p>
          </div>
          <div className="timeline-content">
            <h3>
              {experience.role} · <span>{experience.company}</span>
            </h3>
            <ul>
              {experience.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="chip-row">
              {experience.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="panel">
    <header className="section-heading">
      <div>
        <h2>Projects</h2>
      </div>
    </header>
    <div className="card-grid">
      {projects.map((project) => (
        <article key={project.name} className="project-card">
          {project.image && (
            <div className="project-media">
              <img src={project.image} alt={project.imageAlt || `${project.name} preview`} />
            </div>
          )}
          <div className="project-heading">
            <div>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  <h3>{project.name}</h3>
                </a>
              ) : (
                <h3>{project.name}</h3>
              )}
              <span>{project.date}</span>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="pill-button ghost small">
                View
              </a>
            )}
          </div>
          <p>{project.description}</p>
          <ul>
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <div className="chip-row">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="panel">
    <header className="section-heading">
      <div>
        <h2>Education & Skills</h2>
      </div>
    </header>
    <div className="skills-layout">
      <div className="education-card">
        <h3>{resumeData.education.school}</h3>
        <p>{resumeData.education.graduation}</p>
        <p className="muted">Relevant Coursework</p>
        <ul>
          {resumeData.education.coursework.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="skill-group">
          <p className="muted">Languages & Systems</p>
          <div className="tag-grid">
            {resumeData.skills.languages.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="skill-group">
          <p className="muted">Frameworks & Tools</p>
          <div className="tag-grid">
            {resumeData.skills.frameworks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="skill-group">
          <p className="muted">Awards</p>
          <ul className="awards">
            {resumeData.skills.awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="panel contact-panel">
    <header className="section-heading">
      <div>
        <h2>Involvement & Leadership</h2>
      </div>
    </header>
    <div className="contact-content">
      <div>
        <ul className="leadership-list">
          {resumeData.leadership.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="contact-card">
        <h3>Let’s work together</h3>
        <div className="contact-actions">
          <a className="pill-button primary" href={`mailto:${resumeData.email}`}>
            Email Arush
          </a>
          <a className="pill-button ghost" href={resumeData.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="pill-button ghost" href={resumeData.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const [activeSection, setActiveSection] = React.useState(navItems[0].id);

  React.useEffect(() => {
    const observers = [];
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(item.id);
              }
            });
          },
          { rootMargin: "-45% 0px -45% 0px" }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className="app-shell">
      <FloatingNav activeSection={activeSection} />
      <div className="layout">
        <ProfileSidebar />
        <main className="content">
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
          <footer className="site-footer">
          </footer>
        </main>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
