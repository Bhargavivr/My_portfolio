import React from "react";

const projects = [
  {
    title: "Chat My Database – Natural Language to SQL",
    description:
      "Built an interactive web app that converts plain English questions into real SQL queries and runs them on a live SQLite database using LangChain. Displays the generated SQL, executed output, and a simple natural-language answer, making database querying conversational and beginner-friendly.",
    image: "/chat-db.png",
    tech: [
      {
        name: "React",
        color: "bg-blue-600/20 text-blue-300",
        icon: "https://skillicons.dev/icons?i=react",
      },
      {
        name: "Node.js",
        color: "bg-green-600/20 text-green-400",
        icon: "https://skillicons.dev/icons?i=nodejs",
      },
      {
        name: "LangChain",
        color: "bg-yellow-600/20 text-yellow-300",
        icon: "https://skillicons.dev/icons?i=ai",
      },
      {
        name: "SQLite",
        color: "bg-orange-600/20 text-orange-300",
        icon: "https://skillicons.dev/icons?i=sqlite",
      },
      {
        name: "OpenAI API",
        color: "bg-purple-500/20 text-purple-400",
        icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
      },
      {
        name: "Netlify",
        color: "bg-blue-400/20 text-blue-300",
        icon: "https://cdn.brandfetch.io/idoW6GB9ca/theme/dark/idTPYT6Fjj.svg?c=1bxid64Mup7aczewSAYMX&t=1746443892139",
      },
    ],

    code: "https://github.com/Bhargavivr/chat_database_project",
  },

  {
    title: "Shoe-Store",
    description:
      "Developed a complete Nike-themed online store supporting product browsing, cart management, and order placement with integrated APIs.",
    image: "/shoestore.png",
    tech: [
      {
        name: "React",
        color: "bg-blue-600/20 text-blue-300",
        icon: "https://skillicons.dev/icons?i=react",
      },
      {
        name: "Redux",
        color: "bg-purple-400/20 text-purple-300",
        icon: "https://skillicons.dev/icons?i=redux",
      },
      {
        name: "React Router",
        color: "bg-pink-400/20 text-pink-300",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original-wordmark.svg",
      },

      {
        name: "Netlify",
        color: "bg-blue-400/20 text-blue-300",
        icon: "https://cdn.brandfetch.io/idoW6GB9ca/theme/dark/idTPYT6Fjj.svg?c=1bxid64Mup7aczewSAYMX&t=1746443892139",
      },
    ],
    code: "https://github.com/Bhargavivr/Shoe_store",
    live: "https://shoesstorre.netlify.app/",
  },
  {
    title: "RockyBot – Financial News Q&A Assistant",
    description:
      "Created an intelligent news-research tool where users enter any article URL and ask questions to instantly get insights related to stock markets and finance. Helps simplify research by extracting key information and summarizing relevant financial context.",
    image: "rockybot.png",
    tech: [
      {
        name: "React",
        color: "bg-blue-600/20 text-blue-300",
        icon: "https://skillicons.dev/icons?i=react",
      },
      {
        name: "Node.js",
        color: "bg-green-600/20 text-green-400",
        icon: "https://skillicons.dev/icons?i=nodejs",
      },
      {
        name: "LangChain",
        color: "bg-yellow-600/20 text-yellow-300",
        icon: "https://skillicons.dev/icons?i=ai",
      },

      {
        name: "OpenAI API",
        color: "bg-purple-500/20 text-purple-400",
        icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
      },
    ],

    code: "https://github.com/Bhargavivr/rockybot",
  },
{
  title: "FirstFlo – Smart Menstrual Wellness Platform",
  description:
    "FirstFlo is a React-based menstrual wellness platform with modular components and RESTful APIs for period tracking, user data handling, and personalized health insights. It delivers age-specific features and supports future integrations like AI chatbots and secure cloud storage.",
  image: "firstflo.jpg",
  tech: [
    {
      name: "React",
      color: "bg-blue-600/20 text-blue-300",
      icon: "https://skillicons.dev/icons?i=react",
    },
    {
      name: "Node.js",
      color: "bg-green-600/20 text-green-400",
      icon: "https://skillicons.dev/icons?i=nodejs",
    },
    {
      name: "REST API",
      color: "bg-yellow-600/20 text-yellow-300",
      icon: "https://cdn-icons-png.flaticon.com/512/149/149852.png",
    },
    {
      name: "State Management",
      color: "bg-pink-600/20 text-pink-300",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    },
    {
      name: "Analytics Engine",
      color: "bg-orange-600/20 text-orange-300",
      icon: "https://cdn-icons-png.flaticon.com/512/1584/1584940.png",
    },
    {
      name: "Future AI Integration",
      color: "bg-purple-500/20 text-purple-400",
      icon: "https://skillicons.dev/icons?i=ai",
    },
  ],

  code: "https://github.com/Bhargavivr/Firstflo.git",
    tag: "Group Project",
}
,
  {
    title: "Kubernetes Failure Predictor ",
    description:
      "An ML-based system predicting pod crashes and resource bottlenecks in Kubernetes clusters using real-time metrics and historical data.",
    image: "/kubernetes.png",
    tech: [
      {
        name: "React",
        color: "bg-blue-600/20 text-blue-300",
        icon: "https://skillicons.dev/icons?i=react",
      },
      {
        name: "FastAPI",
        color: "bg-green-600/20 text-green-400",
        icon: "https://skillicons.dev/icons?i=fastapi",
      },
      {
        name: "Docker",
        color: "bg-blue-500/20 text-blue-400",
        icon: "https://skillicons.dev/icons?i=docker",
      },
      {
        name: "AWS",
        color: "bg-orange-500/20 text-orange-300",
        icon: "https://skillicons.dev/icons?i=aws",
      },
    ],
    code: "https://github.com/Bhargavivr/Kubernetes_phase2",
    live: "https://68000d22b820d52237f84c7d--polite-dieffenbachia-accee2.netlify.app/",
    tag: "Group Project",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.live} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </a>

            <div className="project-content">
              <div className="flex justify-between items-center">
                <h3>{project.title}</h3>
                {project.tag && (
                  <span className="group-tag">{project.tag}</span>
                )}
              </div>

              <p>{project.description}</p>

              <div className="tech-badges">
                {project.tech.map((t, i) => (
                  <div key={i} className={`tech-pill ${t.color}`}>
                    <img src={t.icon} alt={t.name} />
                    <p>{t.name}</p>
                  </div>
                ))}
              </div>

              <div className="project-links">
                {project.frontend && (
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noreferrer"
                    className="btnn"
                  >
                    Frontend Code
                  </a>
                )}
                {project.backend && (
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noreferrer"
                    className="btnn"
                  >
                    Backend Code
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btnn"
                  >
                    Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btnn"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
