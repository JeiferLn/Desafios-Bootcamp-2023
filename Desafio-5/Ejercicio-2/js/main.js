const inputCategoria = document.getElementById("inputNCategoria");

const botoninput = document.getElementById("formContainer");
const answer = document.getElementById("rechazo")

const contInput = document.getElementById("contenedorInput");
const contInp = document.getElementById("contenedorInput")
const tabla = document.getElementById("contenedorTabla");
const contTh = document.getElementById("contenedorth")
const contTd = document.getElementById("contenedorTd")

let nInputs;
let inputDinero;

inputCategoria.addEventListener("input", iC=>{
    generarInputs();
    if(contInp.style.display == "none"){
        contInp.style.display = "contents"
        contInp.style.marginTop = "10px";
    }

    if(tabla.style.display == "table"){
        tabla.style.display = "none";
    }
});

botoninput.addEventListener("submit",  b1=> {
    event.preventDefault();

    nInputs = document.getElementById("inputNCategoria").value;
    let n = 2;
    let sum = 0;
    answer.innerHTML = "";

    for (let i = 0; i<nInputs; i++){
        var num = parseInt(document.getElementById("inputText"+n).value);
        sum = sum + num;
        n += 2;
    }

    if(sum == 100){
        cambioHTML();
        generarTabla();
        inputDinero = document.getElementById("inputIngreso");
        inputDinero.addEventListener("input", c=>{
        event.preventDefault();
        calcularCategorias();
    });
    } else{
        answer.innerHTML = "La sumatoria debe ser igual a 100";
        answer.style.color = "red";
    }
});



function cambioHTML(){
    if (tabla.style.display === "none") {
        tabla.style.display = "table";
    }
};

function generarInputs(){
    nInputs = document.getElementById("inputNCategoria").value;
    contInput.innerHTML = "";
    
    for(let i = 0; i < nInputs*2; i++){
        var divInput = document.createElement("div");
        divInput.setAttribute("class", "col-5");
        divInput.style.marginRight = "24px";
        divInput.style.marginLeft = "24px";
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
    contTh.innerHTML = "";
    contTd.innerHTML = "";
    var divTh = document.createElement("th");
    divTh.textContent = "Ingreso total";
    contTh.appendChild(divTh);
    
    var divTd = document.createElement("td");
    var inpIngreso= document.createElement("input");
    inpIngreso.setAttribute("class", "form-control");
    inpIngreso.setAttribute("id", "inputIngreso");
    inpIngreso.setAttribute("type", "text");
    inpIngreso.setAttribute("required","");
    divTd.appendChild(inpIngreso)
    contTd.appendChild(divTd);


    let nInputs = document.getElementById("inputNCategoria").value;
    let n = 1;

    for(let i = 0; i<nInputs; i++){
        var divTh = document.createElement("th");
        var text = document.getElementById("inputText"+n).value;
        divTh.textContent = text;
        contTh.appendChild(divTh);
        
        var divTd= document.createElement("td");
        divTd.setAttribute("id", "value" + (i+1));
        contTd.appendChild(divTd);

        n += 2;
    }
}

function calcularCategorias(){
    let n = 2;
    for(let i = 0; i<nInputs; i++){
        var inputValue = document.getElementById("inputText" + n).value;
        var valorTotal = document.getElementById("inputIngreso").value;

        var resultado = (valorTotal * (inputValue/100));

        var valor = document.getElementById("value" + (i+1));
        valor.innerHTML = resultado;
        
        n += 2;
    }
};