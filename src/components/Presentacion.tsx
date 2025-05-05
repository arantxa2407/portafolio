import "../css/Presentacion.css";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import arantxa from "../assets/U22215775.png";
import positive from "../assets/positive.svg";
import bar from "../assets/circle-bar.svg";
import persona from "../assets/person-header.svg";
import Nav from "./Nav";

const Presentacion = () => {
  return (
    <>
      <Nav />
      <section id="presentacion">
        <div className="container">
          <div className="left__container">
            <div className="text__container">
              <img src={arrowLeft} alt="arrow-left" className="arrowLeft" />
              <h1>
                ¡Hola! Soy <br /> <span className="name">Arantxa Condor</span>
              </h1>
              <img src={arrowRight} alt="arrow-right" className="arrowRight" />
            </div>
            <div className="img__container">
              <img src={arantxa} alt="arantxa" />
              <div className="rol">
                <p>Desarrolladora Frontend </p>
              </div>
            </div>
          </div>
          <div className="right__container">
            <div className="experience">
              <div className="time">
                <img src={positive} alt="positive" className="positive" />
                <span className="years">1</span>
              </div>
              <h3>Año de experiencia</h3>
            </div>
            <div className="data__container">
              <img src={bar} alt="data__bar" className="data__bar" />
              <div className="data">
                <a href="tel:+34665120263">(+34) 665 120 263</a>
                <a href="mailto:acondor2407@gmail.com">acondor2407@gmail.com</a>
                <a
                  href="https://www.linkedin.com/in/arantxa-jennifer-condor-culque-4589a6307/"
                  target="_blank"
                >
                  https://www.linkedin.com/in/ajcondor/
                </a>
                <b>Barcelona, España</b>
              </div>
            </div>
            <img
              src={persona}
              alt="persona header"
              className="persona__header"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentacion;
