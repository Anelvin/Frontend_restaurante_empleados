import React,{Component} from 'react';
import Navegacion from '../Navegacion/Navegacion.jsx';
import './RegistroCategoria.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import { borrarToken } from '../store/action';

class RegistroCategoria extends Component{

    constructor(props){
        super(props);
        this.state={
            categoria:'',
            descripcion:''
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    componentDidMount(){
        if(!this.props.token){
            this.props.history.push('/login')
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let config={
            headers:{
                'Autorization': this.props.token
            }
        }
        axios.post(this.props.RegistrarCategoria, this.state, config)
        .then(resultado=>{
            this.props.history.push('categoria');
        })
        .catch(error=>{
            borrarToken();
            this.props.history.push('/');
        })
    }

    render(){
        return (
            <div className='cuerpoCategoria'>
                <Navegacion />
                <div className="container pt-5">
                    <img className="position-absolute logo-login" src="https://firebasestorage.googleapis.com/v0/b/restaurantes-7f37d.appspot.com/o/imagenFondo%2FLogo-empresa.png?alt=media" alt=""/>
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-8 offset-2">
                                <form className="pt-5" onSubmit={this.handleSubmit}>
                                <h1 className="text-center">Registrar categoria</h1>
                                    <div className="form-group pt-5">
                                        <label>Nombre</label>
                                        <input type="text" name="categoria" onChange={this.handleChange} className="form-control" placeholder="Nombre"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Descripción</label>
                                        <input type="text" name="descripcion" onChange={this.handleChange} className="form-control" placeholder="Descripción"/>
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
        RegistrarCategoria: state.registrarCategoria,
        token: state.token
    }
}

export default connect(mapStateToProps)(RegistroCategoria);