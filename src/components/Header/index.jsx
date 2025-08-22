import logoSvg from "./logo.svg";
import { User, FileUser, ScrollText } from "lucide-react";

import "./style.css";

const Header = () => {
  return (
    <nav className="headerContainer">
      <div className="nameContent">
        <img src={logoSvg} className="logo" alt="Logo" />
        <h1>LucasFolio</h1>
      </div>
      <div className="menuContent">
        <ul className="nav-links">
          <li>
            <a href="#aboutMe" aria-label="About Me">
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio" aria-label="Portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lucashabreu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Curriculum LinkedIn Profile"
            >
              Curriculum
            </a>
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
        </div>
      </div>
    </nav>
  );
};

export default Header;
