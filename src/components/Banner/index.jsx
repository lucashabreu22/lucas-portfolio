import bannerImage from "./low-poly-grid-haikei.svg";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner-content">
      <img src={bannerImage} alt="bannerImage" className="banner-image" />
      <div className="banner-text">
        <h1>Lucas Abreu</h1>
        <p>Software Engineer | Senior QA Engineer | React Enthusiast</p>
        <button
          onClick={() =>
            document
              .getElementById("portfolio")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Portfolio
        </button>
      </div>
    </div>
  );
};

export default Banner;
