import "./style.css";
import gerenciadorTasksImg from "./gerenciadorTasks.jpg"; // Importe a imagem
import loginProjectImg from "./loginProject.jpg"; // Importe a imagem do projeto de login
import cepProjectImg from "./cepProject.jpg"; // Importe a imagem do projeto de busca de CEP

const Portfolio = () => {
  const projects = [
    {
      name: "Login Page ",
      description:
        "A simple login page built with React.js. Where the user can register and login, savind the data in localStorage.",
      image: loginProjectImg,
      link: "https://login-project-gules-iota.vercel.app/",
    },
    {
      name: "Search CEP ",
      description:
        "A project that allows users to search for Brazilian postal codes (CEP) and view their details.",
      image: cepProjectImg,
      link: "https://bucador-cep.vercel.app/",
    },
    {
      name: "Task Manager",
      description:
        "First project with React.js. A simple task manager application.",
      image: gerenciadorTasksImg,
      link: "https://lucasproject-snowy.vercel.app/",
    },
  ];

  return (
    <div className="portfolioContainer">
      <section id="portfolio">
        <h2>Portfolio</h2>
      </section>

      {projects.map((project, index) => (
        <div key={index} className="projects">
          <div className="projectText">
            <p className="featuredProject">Featured Project</p>
            <h4>{projects[index].name}</h4>
            <p>{projects[index].description}</p>
            <button onClick={() => window.open(projects[index].link, "_blank")}>
              View Project
            </button>
          </div>
          <div className="projectImg">
            <img
              src={projects[index].image}
              alt="Project Thumbnail"
              className="projectThumbnail"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
