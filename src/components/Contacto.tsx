import arrow from "../assets/arrow.svg";
import "../css/Contacto.css";
import persona from "../assets/person-contact.svg";

const Contacto = () => {
  return (
    <section id="contacto" className="contact__group">
      <div className="contact__container-left">
        <h2>Contacto</h2>
        <p>Quieres contactar al profesional de este perfil? Agéndalo</p>
        <img src={arrow} alt="flecha" className="contact-arrow" />
      </div>
      <div className="contact__container-right">
        <div className="contact__calendly">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/acondor2407/30min?hide_gdpr_banner=1"
          ></div>
        </div>
        <img src={persona} alt="persona" className="persona" />
      </div>
    </section>
  );
};

export default Contacto;
