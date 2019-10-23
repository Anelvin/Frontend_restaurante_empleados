import React,{Component} from 'react';
import Navegacion from '../Navegacion/Navegacion.jsx';
import firebase from 'firebase';
import { connect } from 'react-redux';
import Axios from 'axios';


const firebaseConfig = {
    apiKey: "AIzaSyD0-OPt7JpQiroULgUVJ7bqF_gmdpAAdNY",
    authDomain: "restaurantes-7f37d.firebaseapp.com",
    databaseURL: "https://restaurantes-7f37d.firebaseio.com",
    projectId: "restaurantes-7f37d",
    storageBucket: "restaurantes-7f37d.appspot.com",
    messagingSenderId: "1071704022087",
    appId: "1:1071704022087:web:ec2aad3b04c1713b1d2562",
    measurementId: "G-91HTVR0W48"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

class RegistroProducto extends Component{
    constructor(props){
        super(props);
        this.state={
            uploadValue:0,
            categorias:null,
            proveedores:null
        }
    }

    componentDidMount(){
        Axios.get(this.props.categorias)
        .then(resultado=>{
            this.setState({
                categorias:resultado.data
            })
        })
        .catch(error=>console.log(error));
        Axios.get(this.props.proveedores)
        .then(resultado=>{
            this.setState({
                proveedores:resultado.data
            })
        })
        .catch(error=>console.log(error));
    }
    handleChange=(event)=>{
      
    }
    handleChangeFile=(event)=>{
        const file=event.target.files[0];
        const storageRef=firebase.storage().ref(`imagenProductos/${file.name}`);
        const task=storageRef.put(file);

        task.on('state_changed',(snapshot)=>{
            let porcentaje=(snapshot.bytesTransferred/snapshot.totalBytes)*100
            this.setState({
                uploadValue:porcentaje
            })
        },(error)=>{
            this.setState({
                mensaje:'Ha ocurrido un error',
            })
        },()=>{
            this.setState({
                mensaje:'Archivo subido',
            })
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let datos={
            nombre:event.target.nombre.value,
            categoria:event.target.categoria.value,
            descripcion:event.target.descripcion.value,
            stock:event.target.stock.value,
            imagenURL:event.target.imagen.files[0].name,
            proveedor:event.target.proveedor.value
        }
        Axios.post(this.props.registrarProducto,datos)
        .then(resultado=>{
            this.props.history.push('/producto');
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
                                <h1 className="text-center">Registrar Producto</h1>
                                    <div className="form-group pt-5">
                                        <label>Nombre</label>
                                        <input type="text" name="nombre" onChange={this.handleChange} className="form-control" placeholder="Nombre"/>
                                    </div>
                                    <div>
                                    <label>Categoria</label>
                                        <select className="form-control" name="categoria" onChange={this.handleChange}>
                                        <option value="">Seleccione categoria...</option>
                                        {this.state.categorias===null ? null :
                                        this.state.categorias.map(categoria=>{
                                            return (
                                                <option value={categoria.catgoria} key={categoria._id}>{categoria.categoria}</option>
                                            )
                                        })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Descripción</label>
                                        <input type="text" name="descripcion" onChange={this.handleChange} className="form-control" placeholder="Descripción"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Stock</label>
                                        <input type="text" name="stock" onChange={this.handleChange} className="form-control" placeholder="Stock"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Imagen</label>
                                        <input type="file" onChange={this.handleChangeFile} name="imagen" className="btn btn-link"/>
                                    </div>
                                        <progress value={this.state.uploadValue} max='100'></progress>
                                        {this.state.mensaje}
                                    <div className="form-group">
                                        <label>Proveedor</label>
                                        <select className="form-control" name="proveedor" onChange={this.handleChange}>
                                        <option value="">Seleccione proveedor...</option>
                                        {this.state.proveedores==null ? null :
                                        this.state.proveedores.map(proveedor=>{
                                            return (
                                                <option value={proveedor.nombre} key={proveedor._id}>{proveedor.nombre}</option>
                                            );
                                        })
                                        }
                                        </select>
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
        categorias:state.buscarCategorias,
        proveedores:state.buscarProveedores,
        registrarProducto: state.registrarProducto
    }
}

export default connect(mapStateToProps)(RegistroProducto);
