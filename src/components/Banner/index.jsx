import bannerImage from "./low-poly-grid-haikei.svg";
import { useLanguage } from "../../context/LanguageContext.jsx";
import "./style.css";

const Banner = () => {
  const { t } = useLanguage();
  return (
    <div className="banner-content">
      <img
        src={bannerImage}
        alt={t("bannerImageAlt")}
        className="banner-image"
      />
      <div className="banner-text">
        <h1>{t("name")}</h1>
        <p>{t("jobTitle")}</p>
        <button
          onClick={() =>
            document
              .getElementById("portfolio")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {t("viewPortfolio")}
        </button>
      </div>
    </div>
  );
};

export default Banner;
