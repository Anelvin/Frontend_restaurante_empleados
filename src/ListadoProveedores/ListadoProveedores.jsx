import React,{Component} from 'react';
import Navegacion from '../Navegacion/Navegacion.jsx';
import './ListadoProveedores.scss';
import { connect } from 'react-redux';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { borrarToken } from '../store/action';

class ListadoProveedores extends Component{

    constructor(props){
        super(props);
        this.state={
            proveedores:null
        }
    }

    componentDidMount(){
        if(!this.props.token){
            this.props.history.push('/login')
        }else{
            Axios.get(this.props.proveedores)
            .then(resultado=>{
                this.setState({
                    proveedores:resultado.data
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
            <div className="listadoProveedores">
                <Navegacion/>
                <div className="pt-5">
                </div>
                <div className="container">
                <img className="position-absolute logo-login" src="https://firebasestorage.googleapis.com/v0/b/restaurantes-7f37d.appspot.com/o/imagenFondo%2FLogo-empresa.png?alt=media" alt=""/>
                    <div className="jumbotron">
                    <div className="pt-5">
                    </div>
                    <h1 className="text-center">Listado de proveedores</h1>
                    <div className="pt-5">
                    </div>
                    <div className="pt-5">
                    </div>
                    <div className="contenedorTabla">
                    <Link to={this.props.registrarProveedor} className="btn btn-success">➕Nuevo proveedor</Link>
                        <table className="table mt-2">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Referencia</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Teléfono</th>
                                    <th scope="col">Dirección</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.proveedores==null ? null :
                                this.state.proveedores.map(proveedor=>{
                                    return (
                                        <tr key={proveedor._id}>
                                            <td>{proveedor._id}</td>
                                            <td>{proveedor.nombre}</td>
                                            <td>{proveedor.telefono}</td>
                                            <td>{proveedor.direccion}</td>
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
        proveedores: state.buscarProveedores,
        registrarProveedor: state.dRegistrarProveedor,
        token: state.token
    }
}

export default connect(mapStateToProps)(ListadoProveedores);