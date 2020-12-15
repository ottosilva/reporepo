import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {

    //Obtener el state del proyectos
    const proyectosContext = useContext(proyectoContext); //todos los proyectos se van a encontrar en este context
    const {proyectoActual} = proyectosContext;
    

    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext); //todas las tareas se van a encontrarn en este context
    const {obtenerTareas} = tareasContext;


    //funcion para agregar el proyecto actual
    const seleccionarProyecto = id =>{
        proyectoActual(id); //fijar el proyecto actual
        obtenerTareas(id); //filtrar las tareas cuando se de click
    }
    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blanck"
                onClick={()=> seleccionarProyecto(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;