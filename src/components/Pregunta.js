import React, {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizaPregunta}) => {

    //Definir los states

    const [ cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Función que lee el presupuesto
    const definirPresupuesto = e =>{
       guardarCantidad(parseInt(e.target.value, 10));      
    };

    //Submit para definir presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        //Validando
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            
        }else{
            guardarError(false);
            guardarPresupuesto(cantidad);
            guardarRestante(cantidad);
            actualizaPregunta(false);

        }

        //Agregar el presupuesto

    }

    return (
        <Fragment>
           <h2>Presupuesto</h2>
           { error ? <Error mensaje = 'El presupuesto indicado ha de ser un número superior a 0'/> : null}
           <form>
               <input
                    type = 'number'
                    className = 'u-full-width'
                    placeholder = 'Indica tu presupuesto'
                    onChange = {definirPresupuesto}
                />
               <input
                    type = 'submit'
                    className = 'button-primary u-full-width'
                    value = 'Definir Presuesto'
                    onClick = {agregarPresupuesto}
                />
           </form> 
        </Fragment>
            
        
    );
};

export default Pregunta;