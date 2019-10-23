import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Navegacion extends Component{

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
                <li className="nav-item">
                    <Link to='/registro' className="nav-link text-dark">Login</Link>
                </li>
            </ul>
        </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        dListadoProductos: state.dListadoProductos,
        dListadoCategorias: state.dListadoCategorias
    }
}

export default connect(mapStateToProps)(Navegacion);