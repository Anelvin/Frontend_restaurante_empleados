import React,{Component} from 'react';
import './Home.scss';
import Navegacion from '../Navegacion/Navegacion.jsx';

class Home extends Component{

    render(){
        return(
            <div className="cuerpoHome">
                <Navegacion />
                <div className="pt-5">
                </div>
                <div className="pt-5">  
                </div>
                <div className="container pt-5">
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col">
                                <h1 className="text-center">Bienvenid@s</h1>
                                <h3 className="text-center">A la cadena de restaurantes</h3>
                                <div className="d-flex justify-content-around">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/restaurantes-7f37d.appspot.com/o/imagenFondo%2FLogo-empresa.png?alt=media" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;