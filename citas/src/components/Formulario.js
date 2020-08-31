import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';


const Formulario = ({crearCita}) => {

    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''

    });

    //Creando state para el error del formulario
    const [ error, actualizarError ] = useState (false);

    //Función que se ejecuta cada vez que el usuario escribe un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value

        })
    }

    //Extraer los valores con object destructuring
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = e =>{
        e.preventDefault();
       

        //Validar      trim saca los blancos de un string
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        
        //Eliminar mensaje previo por campos vacios
        actualizarError(false);

        //Asignar un ID
        cita.id = uuid();

        //Crear la cita
        crearCita(cita);


        //Reiniciar el form
        actualizarCita({

        mascota:'',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
        
        })
    }

    return (
        <Fragment>
            <h2>Crear cita</h2>
            { //como sabemos, dentro del fragment no podemos usar if, por lo tanto usamos el ternario
            error
            
            ? <p className="alerta-error">Todos los campos son obligatorios</p>
        
            :null
            }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

            <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

            <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                />

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={actualizarState}
                >Agregar cita</button>
            </form>



        </Fragment>
    );
}
 
export default Formulario;