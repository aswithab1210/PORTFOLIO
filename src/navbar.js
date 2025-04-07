import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css"; // Custom CSS for styling

const Navbar = () => {
  const [navColor, setNavColor] = useState("transparent");

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY > 50) {
        setNavColor("rgba(0, 0, 0, 0.9)"); // Dark background on scroll
      } else {
        setNavColor("transparent"); // Transparent when at the top
      }
    };

    window.addEventListener("scroll", changeNavColor);
    return () => window.removeEventListener("scroll", changeNavColor);
  }, []);
    const handleNavItemClick = () => {
      const navCollapse = document.getElementById("navbarNav");
      if (navCollapse && navCollapse.classList.contains("show")) {
        const bsCollapse = new window.bootstrap.Collapse(navCollapse, {
          toggle: true,
        });
        bsCollapse.hide();
      }
    };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: navColor, transition: "0.3s ease-in-out" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-info fw-bold" href="/">My Portfolio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["home", "about me", "skills", "projects", "contact me"].map((section) => (
              <li className="nav-item" key={section}>
                <Link
                  className="nav-link"
                  to={section}
                  smooth={true}
                  duration={500}
                  role="button"
                  onClick={handleNavItemClick}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
