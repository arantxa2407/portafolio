import { useState, useEffect } from "react";
import "../css/Nav.css";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false); 
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 135) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="nav__bar">
        <div className={`botones ${open ? "mostrar-icono" : ""}`} onClick={() => setOpen(!open)}>
          <span className="material-symbols-outlined abrir ">menu</span>
          <span className="material-symbols-outlined cerrar">close</span>
        </div>
        <ul className={`nav__ul ${open ? "mostrar-menu" : ""}`}>
          <a href="#presentacion" onClick={handleLinkClick}>
            <li
              className={`nav__li ${
                activeSection === "presentacion" ? "active" : ""
              }`}
            >
              Presentación
            </li>
          </a>
          <a href="#proyectos" onClick={handleLinkClick}>
            <li
              className={`nav__li ${
                activeSection === "proyectos" ? "active" : ""
              }`}
            >
              Proyectos
            </li>
          </a>
          <a href="#habilidades" onClick={handleLinkClick}>
            <li
              className={`nav__li ${
                activeSection === "habilidades" ? "active" : ""
              }`}
            >
              Habilidades
            </li>
          </a>
          <a href="#educacion" onClick={handleLinkClick}>
            <li
              className={`nav__li ${
                activeSection === "educacion" ? "active" : ""
              }`}
            >
              Educación
            </li>
          </a>
          <a href="#contacto" onClick={handleLinkClick}>
            <li
              className={`nav__li ${
                activeSection === "contacto" ? "active" : ""
              }`}
            >
              Contacto
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
