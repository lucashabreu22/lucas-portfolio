import logoSvg from "./logo.svg";
import "./style.css";

const Header = () => {
  return (
    <nav className="headerContainer">
      <div className="nameContent">
        <img src={logoSvg} className="logo" alt="Logo" />
        <h1>LucasFolio</h1>
      </div>
      <div className="menuContent">
        <p>Home</p>
        <p>About Me</p>
        <p>Portfolio</p>
        <p>Curriculum</p>
        <label for="switch" class="switch">
          <input id="switch" type="checkbox" />
          <span class="slider"></span>
          <span class="decoration"></span>
        </label>
      </div>
    </nav>
  );
};

export default Header;
