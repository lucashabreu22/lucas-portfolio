import { useLanguage } from "../../context/LanguageContext.jsx";
import "./style.css";

const About = () => {
  const { t } = useLanguage();
  const skills = [
    "React.js",
    "Node.js",
    "Cypress",
    "Atlassian Tools",
    "Selenium",
    "Postman",
    "Jmeter",
    "Agile Methodologies",
  ];

  return (
    <div className="aboutContainer">
      <section id="aboutMe">
        <h2>{t("aboutTitle")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("aboutDescription") }} />
      </section>

      <section id="skills">
        <h2>{t("skillsTitle")}</h2>
        <ul className="skillsList">
          {skills.map((skill, index) => (
            <li key={index} className="skillItem">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
