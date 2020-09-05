import React, { Fragment, useState } from 'react';

const Pregunta = () => {

    //definir State
    const [ cantidad, guardarCantidad ] = useState(0);

    //funcion que lee el presupuesto
    const definirPresupuesto = e => {
        console.log( parseInt (e.target.value))
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
      );
}
 
export default Pregunta;