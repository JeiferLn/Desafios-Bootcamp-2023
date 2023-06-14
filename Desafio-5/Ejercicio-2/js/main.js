const inputCategoria = document.getElementById("inputNCategoria");
const contInput = document.getElementById("contenedorInput");

const botoninput = document.getElementById("formContainer");

const contInp = document.getElementById("contenedorInput")
const tabla = document.getElementById("contenedorTabla");
const contTh = document.getElementById("contenedorth")


inputCategoria.addEventListener("input", gI=>{
    generarInputs();
    if(contInp.style.display == "none"){
        contInp.style.display = "contents"
        contInp.style.marginTop = "10px";
    }
})

botoninput.addEventListener("submit",  b1=> {
    event.preventDefault();
    cambioHTML();
    generarTabla();
});

function cambioHTML(){
    if (tabla.style.display === "none") {
        tabla.style.display = "table";
    }
};

function generarInputs(){
    const nInputs = document.getElementById("inputNCategoria").value;
     contInput.innerHTML = "";
    
    for(let i = 0; i < nInputs*2; i++){
        var divInput = document.createElement("div");
        divInput.setAttribute("class", "col-5");
        divInput.style.marginRight = "22px";
        divInput.style.marginLeft = "22px";
        divInput.style.marginBottom = "10px";


        var nInputCategoria= document.createElement("input");
        nInputCategoria.setAttribute("class", "form-control");
        nInputCategoria.setAttribute("id", "inputText" + (i+1));
        nInputCategoria.setAttribute("type", "text");
        nInputCategoria.setAttribute("required","");
        
        divInput.appendChild(nInputCategoria);
        contInput.appendChild(divInput);
    }
};

function generarTabla(){
    var divTh = document.createElement("th");
    divTh.textContent = "Ingreso total";
    contTh.appendChild(divTh)
    
}