import './App.css';
import { Boton } from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react'

function App() {

  const [numclics , setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numclics + 1 );
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='contenedor-principal' >
        <h1>Contador de clics!</h1> 
        <Contador numclics={numclics}
        />
        <Boton texto="Click"
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
