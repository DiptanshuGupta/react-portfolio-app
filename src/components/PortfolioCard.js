import { useEffect, useState } from "react";
import "./PortfolioCard.css";

const allSkills = [
  "ASP.NET Core",
  "MVC",
  "Web API",
  "REST Services",
  "ADO.NET",
  "Entity Framework",
  "CI/CD",
  "Agile",
  "Mentoring",
  "SQL Server",
  "Angular",
  "React",
  "Bootstrap",
  "Git",
  "Azure",
];

const skillsPerPage = 5;

function PortfolioCard() {
    const [page, setPage] = useState(0);

  const totalPages = Math.ceil(allSkills.length / skillsPerPage);
  const currentSkills = allSkills.slice(page * skillsPerPage, (page + 1) * skillsPerPage);

  const firstRow = currentSkills.slice(0, 3);
  const secondRow = currentSkills.slice(3, 5);

  const [likes, setLikes] = useState(128);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme(!darkTheme);

  // Apply theme to entire page
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkTheme]);

  return (
    <div className="portfolio-card">
      <div className="portfolio-card-header">
        <img
          src="/asset/profile.png"
          alt="Portfolio"
          className="portfolio-image"
        />
      </div>
      <div className="portfolio-details">
        <h2 className="portfolio-title">Diptanshu Gupta</h2>
        <p className="portfolio-name">Full Stack Developer</p>
        <p className="portfolio-description">
          Senior .NET Developer with 16+ years of experience delivering scalable
          enterprise applications. Expert in ASP.NET Core, MVC, Web API, REST
          services, ADO.NET, and Entity Framework. Proven leader in Agile
          environments, driving CI/CD adoption, mentoring teams, and optimizing
          performance. Recognized for aligning technical solutions with business
          goals and delivering mission-critical systems.
        </p>
        <p className="portfolio-skills">Skills</p>
        <div className="skills-list">
          <div className="skills-row">
            {firstRow.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
          <div className="skills-row">
            {secondRow.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
          <div className="skills-nav">
            <button onClick={() => setPage(page - 1)} disabled={page === 0}>
              &lt;
            </button>
            <span>
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages - 1}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="theme-likes-row">
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkTheme ? '🌙 Dark' : '☀️ Light'}
          </button>
          <div className="likes" onClick={() => setLikes(likes + 1)}>
            <span className="heart">❤️</span>
            <span className="likes-count">{likes}</span>
          </div>
        </div>
        <p className="portfolio-phone"> +91-9876543210</p>
        <button className="contact-button">Contact Me</button>
      </div>
    </div>
  );
}

export default PortfolioCard;
