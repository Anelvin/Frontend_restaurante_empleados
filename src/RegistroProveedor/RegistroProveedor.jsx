import React,{Component} from 'react';
import Navegacion from '../Navegacion/Navegacion.jsx';
import { connect } from 'react-redux';
import Axios from 'axios';

class RegistroProveedor extends Component{

    constructor(props){
        super(props);
        this.state={
            nombre:'',
            telefono:'',
            direccion:'',
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        Axios.post(this.props.registrarProveedor,this.state)
        .then(resultado=>{
            this.props.history.push('/proveedor');
        })
        .catch(error=>console.log(error));
    }
    render(){
        return(
            <div className="cuerpoRegistro">
                <Navegacion/>
                <div className="container pt-5">
                    <img className="position-absolute logo-login" src="https://firebasestorage.googleapis.com/v0/b/restaurantes-7f37d.appspot.com/o/imagenFondo%2FLogo-empresa.png?alt=media" alt=""/>
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-8 offset-2">
                                <form className="pt-5" onSubmit={this.handleSubmit}>
                                <h1 className="text-center">Registrar proveedor</h1>
                                    <div className="form-group pt-5">
                                        <label>Nombre</label>
                                        <input type="text" name="nombre" onChange={this.handleChange} className="form-control" placeholder="Nombre"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Teléfono</label>
                                        <input type="text" name="telefono" onChange={this.handleChange} className="form-control" placeholder="Teléfono"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Dirección</label>
                                        <input type="text" name="direccion" onChange={this.handleChange} className="form-control" placeholder="Dirección"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        registrarProveedor: state.registrarProveedor
    }
}

export default connect(mapStateToProps)(RegistroProveedor);