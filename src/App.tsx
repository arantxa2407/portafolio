import ContactoFooter from './components/ContactoFooter';
import HabilidadesEducacion from './components/HabilidadesEducacion';
import Presentacion from './components/Presentacion';
import Proyectos from './components/Proyectos';
import './App.css';


const App = () => {
  return (
    <>
      <Presentacion />
      <Proyectos />
      <HabilidadesEducacion />
      <ContactoFooter />
    </>
  );
}

export default App;