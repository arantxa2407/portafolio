import "../css/Proyectos.css";
import proyecto from "../assets/proyectocc.svg";

const Proyectos = () => {
  return (
    <section id="proyectos" className="proy__container">
      <div className="proyects">
        <h2>Proyectos</h2>
        <div className="proy__group">
          <img src={proyecto} alt="captura proyecto" className="ssproy" />
          <div className="proy__info">
            <h4>&gt; Nombre proyecto</h4>
            <b>Rol</b>
            <ul>
              <li>Tarea</li>
              <li>Tarea</li>
            </ul>
            <a href="#" target="_blank">
              Ver proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
