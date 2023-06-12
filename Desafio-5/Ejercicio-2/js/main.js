const boton = document.getElementById("botonGenerar");
const containerTHead = document.getElementById("contenedorTHead");

boton.addEventListener("click", f=>{
    generarTabla();
    generarInputs();
})

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