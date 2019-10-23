import React,{Component} from 'react';
import './App.css';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import RegistroUsuario from './RegistroUsuario/RegistroUsuario.jsx';
import RegistroProducto from './RegistroProducto/RegistroProducto.jsx';
import RegistroCategoria from './RegistroCategoria/RegistroCategoria.jsx';
import RegistroProveedor from './RegistroProveedor/RegistroProveedor.jsx';
import ListadoProductos from './ListadoProductos/ListadoProductos.jsx';
import ListadoCategorias from './ListadoCategorias/ListadoCategorias.jsx';
import ListadoProveedores from './ListadoProveedores/ListadoProveedores.jsx';

class App extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/registro' component={RegistroUsuario}></Route>
          <Route path='/producto' exact component={ListadoProductos}></Route>
          <Route path='/producto/registrar' component={RegistroProducto}></Route>
          <Route path='/categoria' exact component={ListadoCategorias}></Route>
          <Route path='/categoria/registrar' component={RegistroCategoria}></Route>
          <Route path='/proveedor' exact component={ListadoProveedores}></Route>
          <Route path='/proveedor/registrar' component={RegistroProveedor}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
