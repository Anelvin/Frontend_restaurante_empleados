import React,{Component} from 'react';
import Navegacion from '../Navegacion/Navegacion.jsx';
import './ListadoCategorias.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';

class ListadoCategorias extends Component{

    constructor(props){
        super(props);
        this.state={
            categorias:null
        }
    }

    componentDidMount(){
        Axios.get(this.props.buscarCategorias)
        .then(resultado=>{
            this.setState({
                categorias:resultado.data
            })
        })
    }

    render(){
        return (
            <div className="listadoCategorias">
                <Navegacion/>
                <div className="container">
                    <div className="pt-5">
                    </div>
                    <img className="position-absolute logo-login" src="https://firebasestorage.googleapis.com/v0/b/restaurantes-7f37d.appspot.com/o/imagenFondo%2FLogo-empresa.png?alt=media" alt=""/>
                    <div className="jumbotron">
                    <div className="pt-5">
                    </div>
                        <h1 className="text-center">Listado de categorías</h1>
                        <div className="pt-5">
                        </div>
                        <div className="pt-5">
                        </div>
                        <Link to={this.props.dRegistrarCategoria} className="btn btn-success">➕Nueva categoría</Link>
                        <div className="contenedorTabla">
                        <table className="table mt-2">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Referencia</th>
                                    <th scope="col">Categoría</th>
                                    <th scope="col">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.categorias==null ? null :
                                this.state.categorias.map(categoria=>{
                                    return (
                                        <tr key={categoria._id}>
                                            <td>{categoria._id}</td>
                                            <td>{categoria.categoria}</td>
                                            <td>{categoria.descripcion}</td>
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
        buscarCategorias: state.buscarCategorias,
        dRegistrarCategoria: state.dRegistrarCategoria
    }
}

export default connect(mapStateToProps)(ListadoCategorias);