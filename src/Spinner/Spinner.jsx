import React,{Component} from 'react';
import './Spinner.scss';

class Spinner extends Component{
    render(){
        return(
            <div>
                <h1 className="tituloSpinner">Cargando</h1>
                <div className="main">
                    <div className="loader loader__inner">
                    </div>
                <div className="loader loader__outer"></div></div>
            </div>
        )
    }
}

export default Spinner;