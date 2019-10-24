import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { borrarToken } from '../store/action'

class Navegacion extends Component{

    constructor(props){
        super(props);
        
    }

    cerrarSesion=()=>{
        borrarToken();
    }

    render(){


        return (
            <div className="nav bg-light  justify-content-around navegacion">
            <ul className="nav">
                <li className="nav-item">
                    <Link to='/' className="nav-link text-dark">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={this.props.dListadoProductos} className="nav-link text-dark">Productos</Link>
                </li>
                <li className="nav-item">
                    <Link to={this.props.dListadoCategorias} className="nav-link text-dark">Categorías</Link>
                </li>
                <li className="nav-item">
                    <Link to='/proveedor' className="nav-link text-dark">Proveedores</Link>
                </li>
                <li className="nav-item">
                    <Link to='' className="nav-link text-dark">Pedidos</Link>
                </li>
            </ul>
            <ul className="nav">
                {this.props.token ?
                <li className="nav-item">
                    <Link to='/' onClick={this.cerrarSesion} className="nav-link text-dark">Logout</Link>
                </li>:
                <li className="nav-item">
                    <Link to='/login' className="nav-link text-dark">Login</Link>
                </li>
                }
            </ul>
        </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        dListadoProductos: state.dListadoProductos,
        dListadoCategorias: state.dListadoCategorias,
        token: state.token
    }
}

export default connect(mapStateToProps)(Navegacion);