import {
  ArrowUpRight,
  Award,
  BookOpen,
  Brain,
  Code2,
  Database,
  Download,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Theme = "dark" | "light";
type ProjectCategory = "all" | "ml" | "swe" | "ai" | "embedded";

type Project = {
  title: string;
  category: Exclude<ProjectCategory, "all">;
  image: string;
  description: string;
  stack: string[];
  link: string;
};

type Experience = {
  role: string;
  org: string;
  date: string;
  place: string;
  highlights: string[];
};

type Education = {
  degree: string;
  school: string;
  date: string;
  place: string;
  detail: string;
  logo: string;
};

type SkillGroup = {
  label: string;
  items: string[];
};

type Certification = {
  title: string;
  issuer: string;
  image: string;
  link: string;
};

const navItems = ["Summary", "Experience", "Education", "Projects", "Skills", "Contact"];
const resumePath = "/Aryan_Bhagat_Resume.pdf";
const profileImage = "/profile.jpeg";
const profileNavImage = "/profile-aryan-nav-portrait.webp";
const email = "aryanbhagat2602@gmail.com";
const githubUrl = "https://github.com/aryannnn17";
const linkedinUrl = "https://www.linkedin.com/in/aryanbhagat/";

const getInitialTheme = (): Theme => {
  try {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // Some browser privacy modes block localStorage access.
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const saveThemePreference = (theme: Theme) => {
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {
    // Theme still applies for the current session when persistence is unavailable.
  }
};

const projects: Project[] = [
  {
    title: "Distributed Notification System",
    category: "swe",
    image: "/project-notification-system.png",
    description:
      "Kafka-based distributed notification pipeline with priority-isolated topics, consumer groups, and multi-channel delivery.",
    stack: ["Spring Boot", "Kafka", "SendGrid", "Twilio"],
    link: "https://github.com/aryannnn17/notification-system"
  },
  {
    title: "Smart Recipe Tagger - AI Recipe Generator",
    category: "ai",
    image: "/project-smart-recipe-tagger.png",
    description:
      "Full-stack multimodal AI app that turns food images into recipes, nutrition details, and exploration dashboards.",
    stack: ["React", "Node.js", "MongoDB", "Gemini API"],
    link: "https://github.com/aryannnn17/Smart-Recipe-Tagger"
  },
  {
    title: "FactShield – Fake News Detection Platform",
    category: "ml",
    image: "/project-factshield.png",
    description:
      "Intelligent fake news detection system using NLP and machine learning models to classify and analyze misinformation with explainable insights.",
    stack: ["RoBERTa", "XGBoost", "LightGBM", "Flask"],
    link: "https://factshield-three.vercel.app"
  },
  {
    title: "RAG-Based Personalized Outreach Engine",
    category: "ai",
    image: "/project-email.png",
    description:
      "LLM tool that uses web scraping, embeddings, vector similarity search, and grounded context to draft targeted emails.",
    stack: ["Llama 3.3", "Groq", "LangChain", "ChromaDB"],
    link: "https://github.com/aryannnn17/ColdEmail_Generator_GenAI"
  },
  {
    title: "Breast Cancer Classification",
    category: "ml",
    image: "/project-cancer.png",
    description:
      "Supervised and unsupervised ML pipelines using SVM, spectral clustering, K-means, and Monte Carlo validation.",
    stack: ["Python", "SVM", "K-means", "Scikit-learn"],
    link: "https://github.com/aryannnn17/Breast-Cancer-Diagnosis"
  },
  {
    title: "Web-Based Compiler",
    category: "swe",
    image: "/project-compiler.png",
    description:
      "Browser-based compiler for Python, TypeScript, PHP, Java, and C# that compiles and runs code in real-time using WebAssembly and Docker.",
    stack: ["React", "Chakra UI", "Tailwind CSS", "JavaScript"],
    link: "https://aryannnn17.github.io/online_compiler_reactjs/"
  },{
    title: "Smart BLE Payment Soundbox",
    category: "embedded",
    image: "/project-paymentBox.png",
    description:
        "Embedded firmware on Nordic nRF52840 using Zephyr RTOS, implementing custom GATT services, MTU optimization, and low-latency wireless transaction communication.",
    stack: ["Zephyr RTOS", "Quectel EVK-M8", "Nordic nRF52"],
    link: "https://github.com/aryannnn17/Internship-Indiesemic/tree/main/Payment_Soundbox_using_BLE_Quectelboard_ILI9341"
  },
  {
    title: "BLE-Enabled Digital Examination Terminal",
    category: "embedded",
    image: "/project-examDevice.png",
    description:
        "Featuring real-time response management, secure submission workflows, EEPROM persistence, and a custom embedded UI for low-latency exam interaction.",
    stack: ["EEPROM", "LCD1602", "Keypad Interface"],
    link: "https://github.com/aryannnn17/Internship-Indiesemic/tree/main/LCD1602_ExamDevice"
  },{
    title: "ISC SX126x LoRa Communication Framework",
    category: "embedded",
    image: "/project-LoRa.jpeg",
    description:
        "Cross-platform LoRa communication framework for SX126x modules, supporting Linux, ESP-IDF, and Arduino environments with unified configuration and packet handling.",
    stack: ["SX1262", "SDK DevKit", "Arduino"],
    link: "https://github.com/aryannnn17/Internship-Indiesemic/tree/main/ISC_SX126x"
  }
];

const experiences: Experience[] = [
  {
    role: "Teaching Associate",
    org: "College of Science, California State University - East Bay",
    date: "Jul 2025 - May 2026",
    place: "Hayward, CA",
    highlights: [
      "Led C++ Data Structures and OOP labs for 30+ students.",
      "Mentored debugging, profiling, optimization, ADTs, algorithms, and Big-O reasoning.",
      "Reinforced clean implementation habits and software engineering fundamentals."
    ]
  },
  {
    role: "Research Assistant",
    org: "College of Science, California State University - East Bay",
    date: "Sep 2025 - Mar 2026",
    place: "Hayward, CA",
    highlights: [
      "Built robotics perception pipelines on JetAuto Pro using ROS2, OpenCV, and 3D depth cameras.",
      "Worked on gesture recognition, object detection, autonomous path following, and sensor fusion.",
      "Used LiDAR spatial mapping and AR visualization to improve navigation feedback loops."
    ]
  },
  {
    role: "AI Engineer Intern",
    org: "Simple Ticket",
    date: "Jul 2025 - Sep 2025",
    place: "Boston, MA",
    highlights: [
      "Engineered CRM chatbot systems with OCR ingestion, semantic grounding, and RAG pipelines.",
      "Used vector databases, LLMs, LangGraph, LCEL, and REST APIs for agent orchestration.",
      "Built production-oriented multi-step reasoning flows for dynamic customer workflows."
    ]
  },
  {
    role: "Firmware Engineer",
    org: "Indiesemic Private Limited",
    date: "Jan 2024 - Jun 2024",
    place: "Ahmedabad, India",
    highlights: [
      "Built embedded applications with Zephyr RTOS, Nordic nRF52/nRF53 boards, and Quectel EVKs.",
      "Debugged with Segger J-Link, RTT, and Nordic nRF Connect SDK.",
      "Developed BLE-based data transmission across UART, SPI, I2C, and LoRa interfaces."
    ]
  },
  {
    role: "Embedded Software Intern",
    org: "eInfochips (An Arrow Company)",
    date: "Jul 2023 - Aug 2023",
    place: "Ahmedabad, India",
    highlights: [
      "Contributed to product engineering workflows across embedded and software development tasks.",
      "Gained hands-on exposure to debugging, documentation, and team-based engineering delivery.",
      "Built early industry foundation in connected systems, firmware practices, and product development."
    ]
  }
];

const education: Education[] = [
  {
    degree: "Master of Science, Computer Science",
    school: "California State University, East Bay",
    date: "Aug 2024 - May 2026",
    place: "Hayward, CA",
    detail: "GPA 3.93/4.0",
    logo: "/logos/csueastbay.png"
  },
  {
    degree: "Bachelor of Engineering, Computer and Electronics Engineering",
    school: "L.D. College of Engineering, Gujarat Technological University",
    date: "Oct 2020 - May 2024",
    place: "Ahmedabad, India",
    detail: "CGPA 8.8/10.0",
    logo: "/logos/gtu.png"
  }
];

const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C++", "Java", "JavaScript", "TypeScript", "Go", "SQL"]
  },
  {
    label: "Engineering",
    items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Flask", "REST APIs", "WebSockets"]
  },
  {
    label: "ML and AI",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "YOLO", "Hugging Face", "MLflow", "RAG"]
  },
  {
    label: "Cloud and Data",
    items: ["PostgreSQL", "MongoDB", "ChromaDB", "AWS EC2", "AWS S3", "Docker", "CI/CD", "Git"]
  }
];

const certifications: Certification[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "Andrew Ng, DeepLearning.AI - Stanford Online",
    image: "/cert-ml.png",
    link: "https://coursera.org/share/ee5e302b655a624c7c3207dc48abc37f"
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    image: "/cert-llm.png",
    link: "https://coursera.org/share/5967dd2de31c7e6050810bf738d70da6"
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "Andrew Ng, DeepLearning.AI",
    image: "/cert-NN-and-DL.png",
    link: "https://coursera.org/share/771d60316629ed624ab247234101a946"
  }
];

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveThemePreference(theme);
  }, [theme]);

  const visibleProjects = projects.filter((project) => filter === "all" || project.category === filter);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark brand-photo">
              <img src={profileNavImage} alt="" aria-hidden="true" />
            </span>
            <span>
              <strong>Aryan Bhagat</strong>
              <small>SWE | ML Engineer</small>
            </span>
          </a>

          <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="primary-navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="icon-button"
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
            <button
              className="icon-button menu-button"
              type="button"
              aria-controls="primary-navigation"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <NeuralCanvas />
          <div className="hero-inner hero-two-card">
            <aside className="identity-card">
              <div className="avatar-wrap">
                <img src={profileImage} alt="Aryan Bhagat" />
              </div>
              <h1 id="hero-title">Aryan Bhagat</h1>
              <p className="identity-title">Engineer who makes things happen.</p>
              <div className="contact-strip">
                <span>San Francisco, CA</span>
              </div>
              <div className="quick-links" aria-label="Social links">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                  <Github aria-hidden="true" />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                  <Linkedin aria-hidden="true" />
                </a>
                <a href={`mailto:${email}`} aria-label="Email" title="Email">
                  <Mail aria-hidden="true" />
                </a>
              </div>
            </aside>

            <article className="intro-panel">
              <p className="eyebrow">SOFTWARE ENGINEER • AI/ML ENGINEER</p>
              <h2>Transforming complex AI workflows into fast, reliable, production-ready software.</h2>
              <p>
                Computer Science graduate with experience in designing scalable backend systems, LLM-driven pipelines, and real-time robotic perception using modern AI and distributed architectures.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={resumePath} download>
                  <Download aria-hidden="true" />
                  Download Resume
                </a>
                <a className="button button-secondary" href="#projects">
                  View Projects
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section summary-section" id="summary" aria-labelledby="summary-title">
          <div className="section-heading summary-heading">
            <p className="eyebrow">Summary</p>
            <h2 id="summary-title">Engineer focused on reliable software and practical AI applications.</h2>
          </div>
          <div className="summary-shell">
            <article className="summary-main-card">
              <div className="summary-card-top">
                <p className="eyebrow">Profile</p>
                <span>Actively seeking full-time opportunities</span>
              </div>
              <p className="summary-lead">
                I work like a product-minded engineer: ship clean interfaces, design reliable APIs,
                reason through data and model behavior, and keep systems understandable enough to operate.
                My strongest fit is early-career SWE, ML engineering, and AI application roles.
              </p>
              <div className="summary-proof-grid">
                <div>
                  <strong>3.93/4.0</strong>
                  <span>M.S. Computer Science GPA</span>
                </div>
                <div>
                  <strong>60+</strong>
                  <span>students mentored in C++ DSA labs</span>
                </div>
                <div>
                  <strong>RAG</strong>
                  <span>OCR, vector DBs, LangGraph, LCEL</span>
                </div>
              </div>
            </article>

            <div className="capability-stack" aria-label="Core capabilities">
              <article className="capability-card">
                <Code2 aria-hidden="true" />
                <div>
                  <h3>Software Engineering</h3>
                  <p>React, Next.js, Node.js, FastAPI, REST APIs, databases, Docker, and CI/CD.</p>
                </div>
              </article>
              <article className="capability-card">
                <Brain aria-hidden="true" />
                <div>
                  <h3>Applied ML and AI</h3>
                  <p>PyTorch, TensorFlow, Scikit-learn, OpenCV, Hugging Face, RAG, and evaluation.</p>
                </div>
              </article>
              <article className="capability-card">
                <Database aria-hidden="true" />
                <div>
                  <h3>Systems Foundation</h3>
                  <p>C++, DSA, OOP, embedded firmware, debugging, profiling, and optimization.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="timeline-heading">
            <p className="pill-eyebrow">
              <span />
              Experience
            </p>
            <h2 id="experience-title">
              A <span className="gradient-word">timeline</span> of work.
            </h2>
            <p>Roles where I have taught, researched, built, and deployed scalable systems.</p>
          </div>
          <div className="work-timeline">
            {experiences.map((item) => (
              <article className="timeline-row" key={`${item.role}-${item.org}`}>
                <div className="timeline-role">
                  <p>{item.date}</p>
                  <h3>{item.role}</h3>
                  <span>{item.org}</span>
                  <small>{item.place}</small>
                </div>
                <div className="timeline-node" aria-hidden="true" />
                <div className="timeline-card">
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education" aria-labelledby="education-title">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2 id="education-title">Education and certifications.</h2>
          </div>
          <div className="education-vertical">
            <div className="education-list">
              {education.map((item) => (
                <article className="education-card" key={item.degree}>
                  <div className="education-logo">
                    <img src={item.logo} alt={`${item.school} logo`} />
                  </div>
                  <div className="education-main">
                    <h3>{item.degree}</h3>
                    <p className="education-school">{item.school}</p>
                    <p className="education-detail">{item.detail}</p>
                  </div>
                  <div className="education-meta">
                    <span>{item.date}</span>
                    <span>{item.place}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="coursework-card">
              <BookOpen aria-hidden="true" />
              <p>
                Coursework and fundamentals: advanced algorithms, system design, theory of computation, web systems, cloud computing, cybersecurity, computer architecture, machine learning, and software engineering principles.
              </p>
            </div>  
            <section className="certification-panel" aria-label="Certifications">
              <div className="cert-heading">
                <Award aria-hidden="true" />
                <div>
                  <p className="eyebrow">Certifications</p>
                  <h3>Credential roadmap</h3>
                </div>
              </div>
              <div className="cert-grid">
                {certifications.map((cert) => (
                  <article className="cert-card" key={cert.title}>
                    <img src={cert.image} alt={`${cert.title} certificate`} />
                    <div className="cert-body">
                      <h3>{cert.title}</h3>
                      <p>{cert.issuer}</p>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${cert.title}`}>
                        View Credential
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading with-action">
            <div>
              <p className="eyebrow">Projects</p>
              <h2 id="projects-title">Selected engineering and ML projects.</h2>
            </div>
            <div className="project-actions">
              <div className="filter-bar" aria-label="Project filters">
                {(["all", "ai", "ml", "swe", "embedded"] as ProjectCategory[]).map((category) => (
                  <button
                    key={category}
                    className={filter === category ? "is-active" : ""}
                    type="button"
                    aria-pressed={filter === category}
                    onClick={() => setFilter(category)}
                  >
                    {category === "embedded" ? "EMBEDDED" : category === "ai" ? "AI" : category === "ml" ? "ML" : category === "swe" ? "SWE" : "ALL"}
                  </button>
                ))}
              </div>
              <a className="button button-secondary more-projects-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github aria-hidden="true" />
                More Projects
              </a>
            </div>
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={`${project.title} project preview`} />
                <div className="project-body">
                  <div className="project-topline">
                    <span>{project.category.toUpperCase()}</span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2 id="skills-title">Technical stack for SWE, ML, and AI application work.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.label}>
                <Layers3 aria-hidden="true" />
                <h3>{group.label}</h3>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Available for new-grad SWE and ML opportunities.</h2>
              <p className="lead-text">
                I am looking for teams where I can contribute to production software, learn from senior engineers,
                and keep building practical AI systems.
              </p>
            </div>
            <div className="social-grid">
              <a href={`mailto:${email}`}>
                <Mail aria-hidden="true" />
                Email
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github aria-hidden="true" />
                GitHub
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="contact-footer">
            <span>Made with React, TypeScript, and Vite.</span>
            <span>&copy; {currentYear} Aryan Bhagat. All rights reserved.</span>
          </div>
        </section>
      </main>
    </div>
  );
}

type NetworkNode = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const pointer = { x: 0, y: 0, active: false };
    const colors = ["35, 199, 189", "255, 122, 89", "185, 232, 90", "143, 123, 255"];
    let width = 0;
    let height = 0;
    let nodes: NetworkNode[] = [];
    let frame = 0;

    const createNodes = () => {
      const count = Math.max(28, Math.floor((width * height) / 36000));
      nodes = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: index % 5 === 0 ? 2 : 1.25,
        color: colors[index % colors.length]
      }));
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createNodes();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      nodes.forEach((node, index) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) {
          node.vx *= -1;
        }

        if (node.y < 0 || node.y > height) {
          node.vy *= -1;
        }

        if (pointer.active) {
          const dx = node.x - pointer.x;
          const dy = node.y - pointer.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 120 && distance > 0) {
            const force = (120 - distance) / 120;
            node.x += (dx / distance) * force;
            node.y += (dy / distance) * force;
          }
        }

        for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
          const next = nodes[nextIndex];
          const distance = Math.hypot(node.x - next.x, node.y - next.y);

          if (distance < 135) {
            context.strokeStyle = `rgba(126, 137, 156, ${(1 - distance / 135) * 0.18})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(next.x, next.y);
            context.stroke();
          }
        }

        context.fillStyle = `rgba(${node.color}, 0.78)`;
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    resizeCanvas();
    draw();
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas className="neural-canvas" ref={canvasRef} aria-hidden="true" />;
}

export default App;
