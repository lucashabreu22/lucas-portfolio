import { useLanguage } from "../../context/LanguageContext.jsx";
import "./style.css";
import gerenciadorTasksImg from "./gerenciadorTasks.jpg"; // Importe a imagem
import loginProjectImg from "./loginProject.jpg"; // Importe a imagem do projeto de login
import cepProjectImg from "./cepProject.jpg"; // Importe a imagem do projeto de busca de CEP

const Portfolio = () => {
  const { t } = useLanguage();
  const projects = [
    {
      name: t("loginPageTitle"),
      description: t("loginPageDescription"),
      image: loginProjectImg,
      link: "https://login-project-gules-iota.vercel.app/",
    },
    {
      name: t("searchCepTitle"),
      description: t("searchCepDescription"),
      image: cepProjectImg,
      link: "https://bucador-cep.vercel.app/",
    },
    {
      name: t("taskManagerTitle"),
      description: t("taskManagerDescription"),
      image: gerenciadorTasksImg,
      link: "https://lucasproject-snowy.vercel.app/",
    },
  ];

  return (
    <div className="portfolioContainer">
      <section id="portfolio">
        <h2>{t("portfolioTitle")}</h2>
      </section>

      {projects.map((project, index) => (
        <div key={index} className="projects">
          <div className="projectText">
            <p className="featuredProject">{t("featuredProject")}</p>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <button onClick={() => window.open(project.link, "_blank")}>
              {t("viewProject")}
            </button>
          </div>
          <div className="projectImg">
            <img
              src={project.image}
              alt={t("projectThumbnailAlt")}
              className="projectThumbnail"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
