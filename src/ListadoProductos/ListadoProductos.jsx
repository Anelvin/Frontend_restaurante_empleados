import React,{Component} from'react';
import './ListadoProductos.scss';
import Navegacion from '../Navegacion/Navegacion.jsx';
import { connect } from 'react-redux';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { borrarToken } from '../store/action';

class ListadoProducto extends Component{

    constructor(props){
        super(props);
        this.state={
            productos:null
        }
    }

    componentDidMount(){
        if(!this.props.token){
            this.props.history.push('/login');
        }else{
            Axios.get(this.props.productos)
            .then(resultado=>{
                this.setState({
                    productos:resultado.data
                })
            })
            .catch(error=>{
                borrarToken();
                this.props.history.push('/');
            });
        }
    }

    render(){
        return (
            <div className="listadoProductos">
                <Navegacion/>
                <div className="container">
                    <div className="pt-5">
                    </div>
                    <img className="position-absolute logo-login" src="https://firebasestorage.googleapis.com/v0/b/restaurantes-7f37d.appspot.com/o/imagenFondo%2FLogo-empresa.png?alt=media" alt=""/>
                    <div className="jumbotron">
                    <div className="pt-5">
                    </div>
                        <h1 className="text-center">Listado de productos</h1>
                        <div className="pt-5">
                        </div>
                        <div className="pt-5">
                        </div>
                        <Link to={this.props.dRegistrarProducto} className="btn btn-success">➕Nuevo producto</Link>
                        <div className="contenedorTabla">
                        <table className="table mt-2">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Referencia</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Proveedor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.productos==null ? null :
                                this.state.productos.map(producto=>{
                                    return (
                                        <tr key={producto._id}>
                                            <td>{producto._id}</td>
                                            <td><img className="imagenProducto" src={`https://firebasestorage.googleapis.com/v0/b/restaurantes-7f37d.appspot.com/o/imagenProductos%2F${producto.imagenURL}?alt=media`} alt=""/></td>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.categoria}</td>
                                            <td>{producto.stock}</td>
                                            <td>{producto.proveedor}</td>
                                        </tr>
                                    );
                                })
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        productos: state.buscarProductos,
        dRegistrarProducto: state.dRegistrarProducto,
        token: state.token
    }
}

export default connect(mapStateToProps)(ListadoProducto);