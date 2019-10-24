import React,{Component} from 'react';
import './Login.scss';
import Navegacion from '../Navegacion/Navegacion.jsx';
import { connect } from 'react-redux';
import Axios from 'axios';
import { cargarToken } from '../store/action';

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            usuario:'',
            password:''
        }
    }
    

    componentDidMount(){
        console.log(this.props.iniciarSesion);
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        Axios.post(this.props.iniciarSesion,this.state)
        .then(resultado=>{
            cargarToken(resultado.data.access_token);
            this.props.history.push('/producto')
        })
        .catch(error=>console.log(error));
    }
    render(){
        return(
            <div className="cuerpoLogin">
                <Navegacion />
                <div className="container pt-5">
                    <img className="position-absolute logo-login" src="https://firebasestorage.googleapis.com/v0/b/restaurantes-7f37d.appspot.com/o/imagenFondo%2FLogo-empresa.png?alt=media" alt=""/>
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-8 offset-2">
                                <form className="pt-5" onSubmit={this.handleSubmit}>
                                <h1 className="text-center">Login</h1>
                                    <div className="form-group pt-5">
                                        <label>Usuario</label>
                                        <input type="text" name="usuario" onChange={this.handleChange} className="form-control" placeholder="Usuario"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Contraseña"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Entrar</button>
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
        iniciarSesion: state.iniciarSesion
    }
}

export default connect(mapStateToProps)(Login);