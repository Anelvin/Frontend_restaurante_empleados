import React,{Component} from 'react';
import './Login.scss';
import Navegacion from '../Navegacion/Navegacion.jsx';

class Login extends Component{
    
    render(){
        return(
            <div className="cuerpoLogin">
                <Navegacion />
                <div className="container pt-5">
                    <img className="position-absolute logo-login" src="https://firebasestorage.googleapis.com/v0/b/restaurantes-7f37d.appspot.com/o/imagenFondo%2FLogo-empresa.png?alt=media" alt=""/>
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-8 offset-2">
                                <form className="pt-5">
                                <h1 className="text-center">Login</h1>
                                    <div className="form-group pt-5">
                                        <label>Usuario</label>
                                        <input type="text" className="form-control" placeholder="Usuario"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Contraseña"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Repite la contraseña"/>
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

export default Login;