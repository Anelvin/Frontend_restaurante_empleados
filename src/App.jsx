import React,{Component} from 'react';
import './App.css';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import RegistroUsuario from './RegistroUsuario/RegistroUsuario.jsx';
import RegistroProducto from './RegistroProducto/RegistroProducto.jsx';
import RegistroCategoria from './RegistroCategoria/RegistroCategoria.jsx';

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
          <Route path='/producto/registrar' component={RegistroProducto}></Route>
          <Route path='/categoria/registrar' component={RegistroCategoria}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
