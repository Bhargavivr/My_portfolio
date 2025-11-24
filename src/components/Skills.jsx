import React from "react";

const techStack = [
  { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
  //   { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
  //   { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },

  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },

  { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
  { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
  { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
  { name: "Machine Learning", icon: "https://skillicons.dev/icons?i=sklearn" },
  { name: "GenAI", icon: "https://skillicons.dev/icons?i=ai" },
  { name: "Netlify", icon: "https://skillicons.dev/icons?i=netlify" },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">Tech Stack</h2>

      <div className="skills-grid">
        {techStack.map((tech, index) => (
          <button
            key={index}
            type="button"
            className="skill-card group"
            title={tech.name}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="skill-icon group-hover:-translate-y-1 transition-transform duration-300"
            />
            <p>{tech.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Skills;
