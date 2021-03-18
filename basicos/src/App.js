import React, { Fragment, useState } from 'react';
import Header from './camponents/Header';
import Footer from './camponents/Footer';
import Producto from './camponents/Producto';
import Carrito from './camponents/Carrito';

function App() {

  //crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre:'Camisa ReactJS', precio:50 },
    { id: 2, nombre:'Camisa VueJS', precio:40 },
    { id: 3, nombre:'Camisa NodeJS', precio:30 },
    { id: 4, nombre:'Camisa Angular', precio:20 },

  ]);

  //State para un carrito de compras
  const [ carrito, agregarProducto] = useState([])


  
  //suponemos que al footer queremos añadir la fecha, obtenemos la fecha

  const fecha = new Date().getFullYear();

  return (
    <Fragment>

      <Header 
        titulo = "Tienda virtual"
      />
      <h1>Listado de productos</h1>
      {productos.map(producto =>(

        <Producto 
            key={producto.id}
            producto={producto}
            productos = {productos}
            carrito = {carrito}
            agregarProducto = {agregarProducto}
        />
      ))}

      <Carrito 
        carrito = {carrito}
        agregarProducto={agregarProducto}
      />


      <Footer 
        fecha = {fecha}
      />

    </Fragment>
 
    
  );
}

export default App;
