import '../css/Educacion.css'
import cv from '../assets/CV.pdf'
import persona from '../assets/person-education.svg'

const Educación = () => {
  return (
    <section id='educacion' className="edu__container">
      <h2>Educación</h2>
      <hr />
      <div className="education">
        <p>2022 - Presente</p>
        <div className="center__info">
          <b>Universidad Tecnológica del Perú</b>
          <p>Systems and Computer Engineering</p>
        </div>
      </div>
      <hr />
      <div className="education">
        <p>2024 - Presente</p>
        <div className="center__info">
          <b>DevTalles</b>
          <p>React JS</p>
        </div>
      </div>
      <a href={cv} download="arantxa-cv">Descargar CV</a>
      <img src={persona} alt="persona education" className='persona'/>
    </section>
  )
}

export default Educación