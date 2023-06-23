

const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_producto = import.meta.env.VITE_API_RECETA

export const login = async (usuario)=> {
    try {
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();

        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){

            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado
            }else{
                console.log('mal la contrasena')
                return null;
            }
        }else{
            console.log('mal el email')
            return null;
        }
    }catch(error) {
        console.log(error);
    }
}

export const obtenerRecetas = async ()=> {
    try{
        const respuesta = await fetch();
        const listaRecetas = await respuesta.json();
    }catch{
        console.log(error)
    }

}