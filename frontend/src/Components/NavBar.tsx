import "../Styles/main.scss";
import { FaSun, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    document.getElementById("theme-button")?.classList.toggle("btn-theme-dark");
    if (theme === "dark") {
      setTheme("light");
      document
        .getElementById("root")!
        .style.setProperty("--theme-primary", "rgb(49, 49, 49)");

      document
        .getElementById("root")!
        .style.setProperty("--theme-secondary", "rgb(255, 0, 170)");

      document
        .getElementById("root")!
        .style.setProperty("--theme-background", "rgb(70, 70, 70)");

      document
        .getElementById("root")!
        .style.setProperty("--theme-text", "white");
    } else {
      setTheme("dark");
      document
        .getElementById("root")!
        .style.setProperty("--theme-primary", "rgb(238, 238, 238)");

      document
        .getElementById("root")!
        .style.setProperty("--theme-secondary", "rgb(255, 0, 170)");

      document
        .getElementById("root")!
        .style.setProperty("--theme-background", "white");

      document
        .getElementById("root")!
        .style.setProperty("--theme-text", "rgb(49, 49, 49)");
    }
  };

  useEffect(() => {
    toggleTheme();
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-search-box">
        <input className="navbar-search-text" />
        <a className="navbar-search-btn">
          <FaSearch />
        </a>
      </div>
      <button id="theme-button" className="btn-theme" onClick={toggleTheme}>
        <FaSun />
      </button>
      <div className="navbar-item">Home</div>
      <div className="navbar-item">Profile</div>
      <div className="navbar-item">Seeit</div>
    </div>
  );
};

export default NavBar;
