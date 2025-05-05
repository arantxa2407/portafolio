import "../css/Habilidades.css";

const Habilidades = () => {
  return (
    <section id="habilidades" className="skills__container">
      <div className="skills__container-left">
        <h2>Habilidades</h2>
        <p>&gt; Programming Languages:</p>
        <ul className="skills__list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python(Basic)</li>
          <li>Java(intermediate)</li>
          <li>SQL</li>
        </ul>
        <p>&gt; Frameworks and Tools:</p>
        <ul className="skills__list">
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>SASS</li>
          <li>React</li>
          <li>Angular (intermediate)</li>
        </ul>
        <p>&gt; Languages:</p>
        <ul className="skills__list">
          <li>Intermediate English</li>
          <li>Native Spanish</li>
          <li>Advanced Catalan</li>
          <li>Basic Portugues</li>
        </ul>
      </div>
      <div className="skills__container-right">
        <div className="container__skills">
          <div className="skills__content star">
            <span className="material-symbols-outlined">star</span>
            <p>Habilidades destacadas</p>
          </div>
          <div className="skills__content">
            <div className="circle"></div>
            <p>HTML</p>
          </div>
          <div className="skills__content">
            <div className="circle blue"></div>
            <p>CSS</p>
          </div>
          <div className="skills__content">
            <div className="circle"></div>
            <p>JavaScript</p>
          </div>
          <div className="skills__content">
            <div className="circle blue"></div>
            <p>TypeScript</p>
          </div>
          <div className="skills__content">
            <div className="circle"></div>
            <p>React</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
