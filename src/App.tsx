import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  Eye,
  GitBranch,
  GraduationCap,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { title: "About", path: "about" },
  { title: "Experience", path: "experience" },
  { title: "Skills", path: "skills" },
  { title: "Projects", path: "projects" },
  { title: "Achievements", path: "achievements" },
  { title: "Contact", path: "contact" },
];

const skillGroups = {
  Languages: [
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],
  Libraries: [
    { name: "FAISS" },
    { name: "Sentence-Transformers" },
    { name: "MobileNetV2", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Gemini API" },
    { name: "Ollama" },
    { name: "LangChain" },
  ],
  Frameworks: [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "Streamlit" },
  ],
  Others: [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "AWS S3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Redis Streams", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  ],
};

const experiences = [
  {
    title: "Teaching Assistant - Dhirubhai Ambani University",
    logo: "/DAU_logo.jpg",
    link: "https://www.daiict.ac.in/",
    description:
      "Assisted professors in DBMS and ICT courses, conducted lab sessions, helped students with assignments and practical concepts, evaluated submissions, and resolved technical doubts.",
    meta: "Jun 2025 - Present · Gandhinagar, Gujarat",
  },
  {
    title: "Python Developer Intern - Anand Asset Manager Pvt. Ltd.",
    logo: "/anand_asset_manager_logo.png",
    link: "https://www.profitbuddy.in/blog/",
    description:
      "Developed a high-performance real-time tick data processing system for 2000+ stocks using Redis Streams, Pandas, PostgreSQL, and scalable OHLC aggregation pipelines.",
    meta: "Jan 2025 - May 2025 · Anand, Gujarat",
  },
];

const education = [
  {
    title: "M.Tech - Software System",
    school: "Dhirubhai Ambani University",
    period: "2025 - Present · Gandhinagar, Gujarat",
    badge: "CPI",
    score: "8.40",
    logo: "/DAU_logo.jpg",
    subjects: "Generative AI · RAG · DBMS · Machine Learning · Software Systems · Advanced Computing",
    link: "https://www.daiict.ac.in/",
    linkText: "daiict.ac.in",
  },
  {
    title: "B.Tech - Computer Engineering",
    school: "Madhuben and Bhanubhai Patel Institute of Technology",
    period: "2021 - 2025 · Anand, Gujarat",
    badge: "CPI",
    score: "7.91",
    logoText: "MBIT",
    subjects: "DSA · OS · DBMS · Computer Networks · Machine Learning · Software Engineering · SQL",
    link: "https://www.mbit.edu.in/",
    linkText: "mbit.edu.in",
  },
  {
    title: "HSC & SSC",
    school: "Vidyamangal Residential School",
    period: "Gujarat",
    badge: "HSC 12th",
    score: "70%",
    secondBadge: "SSC 10th",
    secondScore: "75%",
    logoText: "VM",
    subjects: "Science · Mathematics · Computer Fundamentals · Academic Foundation",
    link: "https://vidyamangalschool.org/",
    linkText: "vidyamangalschool.org",
  },
];

const projects = [
  {
    title: "ResearchMind - Multi-Agent AI Research System",
    description:
      "Multi-agent AI research assistant that searches, scrapes, writes, critiques, and exports structured Markdown reports with optimized LLM usage.",
    stack: "Python, Streamlit, LangChain, Gemini API, Tavily API, BeautifulSoup",
    gitUrl: "https://github.com/swayam0413/ResearchMind-Multi-Agent-AI-Research-System",
    tag: "AI",
  },
  {
    title: "AI-Powered Plant Disease Detection System",
    description:
      "AI web application that detects plant diseases from leaf images and generates farmer-friendly symptoms, causes, prevention, and treatment suggestions.",
    stack: "Keras, MobileNetV2, Flask, Gemini API",
    gitUrl: "https://github.com/swayam0413/-AI-Powered-Plant-Disease-Detection-System-with-LLM-Assistant-",
    tag: "AI",
  },
  {
    title: "RAG-based Offline AI Assistant for PDF Querying",
    description:
      "Private local AI assistant for PDF question answering using Retrieval-Augmented Generation, embeddings, semantic search, and local LLM inference.",
    stack: "Python, FAISS, Sentence-Transformers, Ollama, Streamlit",
    gitUrl: "https://github.com/swayam0413/personal_llms",
    tag: "AI",
  },
  {
    title: "AlumNet DAIICT Student Alumni Portal",
    description:
      "Student-alumni portal project focused on connecting academic community members with a modern TypeScript-based application foundation.",
    stack: "TypeScript, Web App",
    gitUrl: "https://github.com/swayam0413/AlumNet-DAIICT-Student-Alumni-Portal",
    tag: "Web",
  },
  {
    title: "Face Emotion Recognition",
    description:
      "Computer vision project exploring emotion recognition from facial input using machine learning workflows and notebook-based experimentation.",
    stack: "Jupyter Notebook, Machine Learning",
    gitUrl: "https://github.com/swayam0413/Face-Emotion-Recognition",
    tag: "ML",
  },
  {
    title: "Bank Management System",
    description:
      "C++ banking management project demonstrating object-oriented programming concepts and command-line application design.",
    stack: "C++",
    gitUrl: "https://github.com/swayam0413/BANK_MANAGEMENT_SYSYTEM_C-",
    tag: "C++",
  },
];

const achievements = [
  "Qualified GATE 2025 in Computer Science with score 496 and AIR 7171.",
  "Qualified GATE 2025 in Data Science and Artificial Intelligence with score 346 and AIR 8603.",
  "Completed Supervised Machine Learning course from Coursera in 2025.",
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45 }}
    >
      <h2>{title}</h2>
      {children}
    </motion.section>
  );
}

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [skillTab, setSkillTab] = useState<keyof typeof skillGroups>("Languages");
  const typedLines = useMemo(() => ["Swayam Patel", "Generative AI Developer", "Python Developer"], []);

  return (
    <main className="site-shell">
      <nav className="navbar">
        <div className="nav-inner">
          <a href="#home" className="logo">
            <img src="/photograph-removebg-preview_1].png" alt="Swayam Patel" />
          </a>

          <button className="menu-toggle" onClick={() => setNavbarOpen((value) => !value)} aria-label="Toggle menu">
            {navbarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a href={`#${link.path}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {navbarOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <a key={link.path} href={`#${link.path}`} onClick={() => setNavbarOpen(false)}>
                {link.title}
              </a>
            ))}
          </div>
        )}
      </nav>

      <div className="container">
        <section id="home" className="hero-section">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>
              <span>Hello, I&apos;m</span>
              <br />
              <b>{typedLines[0]}</b>
            </h1>
            <p className="role-line">{typedLines[1]} | {typedLines[2]}</p>
            <p>
              M.Tech Software System student at Dhirubhai Ambani University with experience in Generative AI, RAG
              systems, real-time data processing, and AI-powered web applications.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="/DAU_RESUME_GEN_AI.pdf" className="btn btn-outline" download>
                <span><Download size={18} /> Download CV</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <img src="/photograph-removebg-preview_1].png" alt="Swayam Patel profile" />
            </div>
          </motion.div>
        </section>

        <Section id="about" title="About Me">
          <div className="about-grid">
            <div className="about-images">
              <img src="/photograph-removebg-preview_1].png" alt="Swayam Patel" />
              <div className="about-card">
                <strong>Gandhinagar, Gujarat</strong>
                <span>M.Tech Software System | DAU</span>
              </div>
            </div>
            <div className="about-text">
              <p>
                I am currently pursuing M.Tech in Software System at Dhirubhai Ambani University. I work with Python,
                Generative AI, RAG, FAISS, Streamlit, Flask, MobileNetV2, Gemini API, PostgreSQL, Redis Streams, and
                real-time data pipelines.
              </p>
              <p>
                I have worked as a Python Developer Intern at Anand Asset Manager Pvt. Ltd. and as a Teaching Assistant
                for DBMS and ICT courses. My focus is on building practical AI solutions that combine reliable backend
                engineering with clear user experiences.
              </p>
            </div>
          </div>
        </Section>

        <Section id="experience" title="My Experience">
          <ul className="experience-grid">
            {experiences.map((experience, index) => (
              <motion.li
                key={experience.title}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <article className="experience-card">
                  <div className="card-image">
                    <img src={experience.logo} alt={`${experience.title} logo`} />
                  </div>
                  <div className="card-body">
                    <h3>{experience.title}</h3>
                    <small>{experience.meta}</small>
                    <p>{experience.description}</p>
                    <a className="card-link" href={experience.link} target="_blank" rel="noreferrer">
                      Visit organization <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education">
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.title}>
                <div className="education-top">
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.school} logo`} />
                  ) : (
                    <span className="education-logo-text">{item.logoText}</span>
                  )}
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.school}</p>
                    <small>{item.period}</small>
                  </div>
                </div>
                <div className="education-body">
                  <div className="score-line">
                    <span>{item.badge}</span>
                    <strong>{item.score}</strong>
                  </div>
                  {item.secondBadge && item.secondScore && (
                    <div className="score-line">
                      <span>{item.secondBadge}</span>
                      <strong>{item.secondScore}</strong>
                    </div>
                  )}
                  <p>{item.subjects}</p>
                </div>
                <a className="education-footer" href={item.link} target="_blank" rel="noreferrer">
                  {item.linkText} <ArrowUpRight size={13} />
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="My Skills">
          <div className="tab-row">
            {(Object.keys(skillGroups) as Array<keyof typeof skillGroups>).map((group) => (
              <button key={group} className={skillTab === group ? "active" : ""} onClick={() => setSkillTab(group)}>
                {group}
              </button>
            ))}
          </div>
          <ul className="skills-grid">
            {skillGroups[skillTab].map((skill, index) => (
              <motion.li
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="skill-card">
                  {skill.logo ? <img src={skill.logo} alt={`${skill.name} logo`} /> : <Code2 size={28} />}
                  <span>{skill.name}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="My Projects">
          <ul className="projects-grid">
            {projects.map((project, index) => (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <article className="project-card">
                  <div className="project-cover">
                    <span>{project.tag}</span>
                    <div className="project-overlay">
                      <a href={project.gitUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                        <GitBranch size={28} />
                      </a>
                      <a href={project.gitUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} preview`}>
                        <Eye size={28} />
                      </a>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <small>{project.stack}</small>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </Section>

        <Section id="achievements" title="Achievements & Certifications">
          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <article className="achievement-card" key={achievement}>
                <Award size={28} />
                <p>{achievement}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Let's Connect">
          <div className="contact-grid">
            <div className="contact-copy">
              <h3>Have an opportunity or project in mind?</h3>
              <p>
                I am interested in internships, AI engineering work, backend systems, data pipelines, and applied ML
                projects.
              </p>
              <div className="contact-icons">
                <a href="https://github.com/swayam0413" target="_blank" rel="noreferrer"><GitBranch size={22} /></a>
                <a href="mailto:202511072@dau.ac.in"><Mail size={22} /></a>
                <a href="https://www.linkedin.com/in/swayam-patel-2a187426b/" target="_blank" rel="noreferrer"><BriefcaseBusiness size={22} /></a>
              </div>
            </div>
            <div className="contact-details">
              <a href="mailto:202511072@dau.ac.in">
                <Mail size={20} />
                202511072@dau.ac.in
              </a>
              <a href="https://github.com/swayam0413" target="_blank" rel="noreferrer">
                <GitBranch size={20} />
                github.com/swayam0413
                <ArrowUpRight size={16} />
              </a>
              <a href="https://www.linkedin.com/in/swayam-patel-2a187426b/" target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={20} />
                linkedin.com/in/swayam-patel-2a187426b
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Section>
      </div>

      <footer className="footer">© 2026 Swayam Patel. Built with React and Tailwind CSS.</footer>
    </main>
  );
}

export default App;
