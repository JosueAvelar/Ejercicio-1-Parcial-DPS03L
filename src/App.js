import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
function App() {
const[dropdown, setDropdown] = useState(false);

    const InteraccionDropdown=()=>{
        setDropdown(!dropdown);
    }
    const [nombre, setNombre] = useState('');
    const [productos, setProductos] = useState([]);
    const agregarProducto = e =>{
      e.preventDefault();
      setProductos([...productos, {nombre}])
    }
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Lista de Compras</span>
        </div>
      </nav>
      <div className='container'>
        <div className='row'>
        <div className='col-md-8 mt-3'>
            <div className='card'>
              <div className='card-header'>
                <h4>Agregar Productos</h4>
              </div>
              <div className='card-body'>
                <form onSubmit = {agregarProducto}>
                  <div className='form-group'>
                    <input className='form-control' placeholder='Agregar Producto' onChange = {e =>setNombre(e.target.value)}/>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-8 mt-3'>
                      <input type='submit' value='Agregar' className='btn btn-primary btn-block' onChange = {e =>setNombre(e.target.value)}/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-md-8 mt-3'>
            <div className='card'>
              <div className='card-header'>
                <h4>Productos</h4>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map(producto =>
                    <tr>
                      <td>{producto.nombre}</td>
                      <td>Otto</td>
                      <td type='numeric'></td>
                      <td>Eliminar</td>
                    </tr>
                  )}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
