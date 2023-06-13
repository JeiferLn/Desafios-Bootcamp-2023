const botoninput = document.getElementById("formContainer");
const botonAtras = document.getElementById("botonRegresar");
const tabla = document.getElementById("contenedorTabla");
const formInput = document.getElementById("formContainer");

botoninput.addEventListener("submit",  b1=> {
    event.preventDefault();
    cambioHTML();
});

botonAtras.addEventListener("click", b2=>{
    event.preventDefault();
    cambioHTML();
});

function cambioHTML(){
    if (tabla.style.display === "none") {
        tabla.style.display = "table";
        formInput.style.display = "none";

    } else {
        tabla.style.display = "none";
        formInput.style.display = "flex"
    }
};

function generarTabla(){
    
}


function generarInputs(){
    const nInputs = document.getElementById("inputNCategoria").value;
    
    for(let i = 0; i < nInputs ; i++){
        var newInput = document.createElement("input")
        newInput.type = "text";
        newInput.id = "input " + (i + 1);
        newInput.inputMode = "numeric";
        newInput.pattern = "[0-9]*";

        contenedor.appendChild(newInput)
    }
}