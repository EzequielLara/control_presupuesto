
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import { useState } from "react";
import './index.css'
import Listado from "./components/Listado";

function App() {

  //Definir State
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizaPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
 

  //Cuando agregamos un nuevo gasto:
  const agregarNuevoGasto = gasto =>{
    
     guardarGastos([...gastos, gasto]);

  }
  

  return (
    <div className = 'container'>
      <header>
        <h1>Gasto Semanal</h1>
        <div className = "contenido-principal contenido">
        { mostrarpregunta ?
          <Pregunta
            guardarPresupuesto = {guardarPresupuesto}
            guardarRestante = {guardarRestante}
            actualizaPregunta = {actualizaPregunta}

          />:
        <div className = 'row'>
         
          <div className = 'one-half column'>
            <Formulario
                agregarNuevoGasto = {agregarNuevoGasto}
            />
          </div>

          <div className = 'one-half column'>
            <Listado
              gastos = {gastos}
         
                
            />
          </div>

        </div>
        }
        </div>
      </header>
   </div>
  );
}

export default App;
