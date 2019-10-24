import store from './index';

export const cargarToken=async(token)=>{

    store.dispatch({
        type:'CARGAR_TOKEN',
        payload:token
    })
}

export const borrarToken=async()=>{
    store.dispatch({
        type:'BORRAR_TOKEN',
        payload:''
    })
}