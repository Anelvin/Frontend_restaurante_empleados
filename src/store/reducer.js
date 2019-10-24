const stateInitial={
    iniciarSesion:'http://localhost:3500/login',

    registrarUsuario:'http://localhost:3500/usuario/create',

    registrarProducto:'http://localhost:3500/producto/create',
    buscarProductos:'http://localhost:3500/producto',
    dListadoProductos:'/producto',
    dRegistrarProducto:'/producto/registrar',
    
    registrarCategoria:'http://localhost:3500/categoria/create',
    buscarCategorias:'http://localhost:3500/categoria',
    dListadoCategorias:'/categoria',
    dRegistrarCategoria:'/categoria/registrar',

    buscarProveedores:'http://localhost:3500/proveedor',
    registrarProveedor:'http://localhost:3500/proveedor/create',
    dListadoProveedores:'/proveedor',
    dRegistrarProveedor:'/proveedor/registrar'

}
function reducer (state=stateInitial,action){
    switch (action.type) {
        case 'CARGAR_TOKEN':
            return {
                ...state,
                token:action.payload
            }
            break;
        case 'BORRAR_TOKEN':
            return {
                ...state,
                token:null
            }
            break;

        default: return state;
    }
}

export default (reducer);