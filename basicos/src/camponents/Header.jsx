import React from 'react';

function Header({titulo}){
// todo lo que esté dentro del return es lo que será visible en este componente 
    const edad = 18;
    let mensaje;
    if (edad >= 18) {mensaje = 'eres mayor de edad'
    } else {mensaje = 'eres menor de edad'}
    //antes del return podemos meter codigo javascrip asi de onda
return(
        <h1 className="encabezado">{titulo}</h1>
    );
}

 export default Header;