import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navegacion extends Component{

    render(){
        return (
            <div className="nav bg-light  justify-content-around navegacion">
            <ul className="nav">
                <li className="nav-item">
                <Link to='/' className="nav-link text-dark">Home</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Pedidos</a>
                </li>
            </ul>
            <ul className="nav">
                <li className="nav-item">
                    <Link to='/registro' className="nav-link text-dark">Login</Link>
                </li>
            </ul>
        </div>
        )
    }
}

export default Navegacion;