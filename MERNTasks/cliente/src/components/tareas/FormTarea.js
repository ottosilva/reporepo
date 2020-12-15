import React,{useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext); //todas las tareas se van a encontrarn en este context
    const {tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas,
    actualizarTarea, limpiarTarea} = tareasContext;

    //Effect que detecta si hay una tarea seleccionada
    useEffect (()=>{
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)
        }else {
            guardarTarea({
                nombre: ''
            })
        }
    },[tareaseleccionada])

    //State del formulario
    const [tarea, guardarTarea] = useState({
        nombre:''
    })

    //Extraer el nombre del proyecto
    const {nombre} = tarea;

    //si no hay proyectos seleccionados
    if(!proyecto) return null;

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    //Leer los valores del formulario
    const handleChange= e =>{
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        //va a revisar si es edicion o si es nueva tarea
        if (tareaseleccionada === null) {
            //entonces tarea nueva
            //agregar una nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado= false;
            agregarTarea(tarea);
        } else {
            //actualizar tarea existente
            actualizarTarea(tarea);

            //elimina tarea seleccionada del state
            limpiarTarea();
        }
        
        

        //obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        //reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ?'Editar nombre de la tarea' :'Agregar tarea'}
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> :null}
        </div>
     );
}
 
export default FormTarea;