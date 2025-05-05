import "../css/Footer.css";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="redes__container">
        <div className="redes__up">
          <a href="https://www.facebook.com" target="_blank">
            <img src={facebook} alt="facebook" className="facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={instagram} alt="instagram" className="instagram" />
          </a>
        </div>
        <div className="redes__down">
          <b>openlab</b>
        </div>
      </div>
      <p>&copy; Derechos reservados</p>
      <div className="email__container">
        <b>Email</b>
        <a href="mailto:acondor2407@gmail.com">acondor2407@gmail.com</a>
      </div>
      <div className="phone__container">
        <b>Teléfono</b>
        <a href="tel:+34665120263">+34 665 120 263</a>
      </div>
    </div>
  );
};

export default Footer;
