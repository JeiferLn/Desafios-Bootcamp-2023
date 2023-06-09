const usuario = document.getElementById("inputUser");
const contraseña = document.getElementById("inputPassword");
const form = document.getElementById("form");
const respuesta = document.getElementById("answer");

let usuarios = [
    {
        user:"Juan",
        pass:"3453"
    },
    {
        user:"admin",
        pass:"1234"
    },
    {
        user:"Carlos",
        pass:"hola123"
    }
]; 

function validacion(nombreUsuario, contraseñaUsuario){
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].user == nombreUsuario && usuarios[i].pass == contraseñaUsuario) {
            return true;
        }
    }
}

form.addEventListener("submit", f=>{
    f.preventDefault();
    respuesta.innerHTML = ""

    if(validacion(usuario.value,contraseña.value)){
        respuesta.innerHTML = "Bienvenido"
    } else{
        respuesta.innerHTML = "Usuario o Contraseña Incorrecto"
    }
});