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
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#">Curriculum</a>
          </li>
        </ul>

        <div className="menu-icon">
          <a href="#aboutMe">
            <User />
          </a>

          <a href="#portfolio">
            <ScrollText />
          </a>
          <a href="#">
            <FileUser />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
