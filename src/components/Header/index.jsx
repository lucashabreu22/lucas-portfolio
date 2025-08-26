import logoSvg from "./logo.svg";
import { User, FileUser, ScrollText } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.jsx";

import "./style.css";

const Header = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <nav className="headerContainer">
      <div className="nameContent">
        <img src={logoSvg} className="logo" alt={t("logoAlt")} />
        <h1>LucasFolio</h1>
      </div>
      <div className="menuContent">
        <ul className="nav-links">
          <li>
            <a href="#aboutMe" aria-label="About Me">
              {t("about")}
            </a>
          </li>
          <li>
            <a href="#portfolio" aria-label="Portfolio">
              {t("portfolio")}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lucashabreu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Curriculum LinkedIn Profile"
            >
              {t("curriculum")}
            </a>
          </li>

          <li>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label="Select Language"
              id="languageSelect"
            >
              <option value="en">EN</option>
              <option value="pt">PT</option>
            </select>
          </li>
        </ul>

        <div className="menu-icon">
          <a href="#aboutMe" aria-label="About Me">
            <User />
          </a>

          <a href="#portfolio" aria-label="Portfolio">
            <ScrollText />
          </a>
          <a
            href="https://www.linkedin.com/in/lucashabreu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Curriculum LinkedIn Profile"
          >
            <FileUser />
          </a>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label="Select Language"
            id="languageSelect"
          >
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;
