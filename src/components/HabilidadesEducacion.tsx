import Educación from "./Educación";
import Habilidades from "./Habilidades";
import "../css/Hab-edu.css";

const HabilidadesEducacion = () => {
  return (
    <section className="skills_edu__container">
      <Habilidades />
      <Educación />
    </section>
  );
};

export default HabilidadesEducacion;
