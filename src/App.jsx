import React,{Component} from 'react';
import './App.css';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import Registro from './Registro/Registro.jsx';

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
          <Route path='/registro' component={Registro}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
