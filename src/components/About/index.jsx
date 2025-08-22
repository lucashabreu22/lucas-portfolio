import "./style.css";

const About = () => {
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
        <h2>About Me</h2>
        <p>
          <strong>Software Quality Assurance Engineer</strong> with a degree in
          Information Systems and <strong>6+ years of experience</strong> in
          test automation and software quality. Skilled in Web and API testing,
          BDD, with proficiency in tools like Cypress, Selenium, and Postman,
          and a strong foundation in agile methodologies.{" "}
          <strong>
            Now focused on expanding my expertise in Front-End Development,
            particularly with React.js
          </strong>
          .
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
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
