const fecha = document.getElementById("inputDate");
const form = document.getElementById("form");
const respuesta = document.getElementById("answer");

function calcularEdad(fechaNacimiento){
    const fechaActual = new Date();
    const anioActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());
    

    // 2004-03-26
    const anioNacimiento = parseInt(String(fechaNacimiento).substring(0,4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5,7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8,10));
    
    let edad = anioActual - anioNacimiento;

    if(mesActual < mesNacimiento){
        edad--;
    } else{
        if(mesActual <= mesNacimiento){
            if(diaActual < diaNacimiento){
                edad--;
            }
        }
    }

    return edad;
}

form.addEventListener("submit", f=>{
    f.preventDefault();
    respuesta.innerHTML = "";

    if(calcularEdad(fecha.value) <= 17){
        respuesta.innerHTML = "Error";
    } else{
        respuesta.innerHTML = "Bienvenido"
    }
})