const stateInitial={
    registrarUsuario:'http://localhost:3500/usuario/create',
    registrarCategoria:'http://localhost:3500/categoria/create',
    buscarCategorias:'http://localhost:3500/categoria',
}
function reducer (state=stateInitial,action){
    switch (action.type) {
    
        default: return state;
    }
}

export default (reducer);