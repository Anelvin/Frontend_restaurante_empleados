import React,{Component} from 'react';
import Navegacion from '../Navegacion/Navegacion.jsx';
import './RegistroUsuario.scss';
import { connect } from 'react-redux';
import axios from 'axios';
import { borrarToken } from '../store/action';

class RegistroUsuario extends Component{
    
    constructor(props){
        super(props);
        this.state={
            nombre:'',
            cargo:'',
            password:''
        }
    }

    componentDidMount(){
        if(!this.props.token){
            this.props.history.push('/login')
        }
    }

    handleChange=(event)=>{
      this.setState({
          [event.target.name]:event.target.value
      })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let config={
            headers:{
                'Autorization': this.props.token
            }
        }
        console.log(this.state);
        if(this.state.password===event.target.password2.value){
            axios.post(this.props.registrarUsuario, this.state, config)
            .then(resultado=>{
                alert('Usuario registrado');
            })
            .catch(error=>{
                borrarToken();
                this.props.history.push('/');
            })
        }
        else{
            console.log('No coinciden');
        }
    }
    
    render(){
        return(
            <div className="cuerpoRegistro">
                <Navegacion />
                <div className="container pt-5">
                    <img className="position-absolute logo-login" src="https://firebasestorage.googleapis.com/v0/b/restaurantes-7f37d.appspot.com/o/imagenFondo%2FLogo-empresa.png?alt=media" alt=""/>
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-8 offset-2">
                                <form className="pt-5" onSubmit={this.handleSubmit}>
                                <h1 className="text-center">Registrar usuario</h1>
                                    <div className="form-group pt-5">
                                        <label>Usuario</label>
                                        <input type="text" name="nombre" onChange={this.handleChange} className="form-control" placeholder="Usuario"/>
                                    </div>
                                    <div>
                                    <label>Cargo</label>
                                        <select className="form-control" name="cargo" onChange={this.handleChange}>
                                        <option value="">Seleccione cargo...</option>
                                        <option value="Administrador">Administrador</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Contraseña"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="password2" className="form-control" placeholder="Repite la contraseña"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Registrarse</button>
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
        registrarUsuario: state.registrarUsuario,
        token: state.token
    }
}

export default connect(mapStateToProps)(RegistroUsuario);