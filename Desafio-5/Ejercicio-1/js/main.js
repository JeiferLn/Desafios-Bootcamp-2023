const boton = document.getElementById("botonCalcular");

boton.addEventListener("click", f=>{
    calcularPntEquilibrio();
})

function calcularPntEquilibrio() {
    const cFijo = parseInt(document.getElementById("costoFijo").value);
    const cVenta = parseInt(document.getElementById("costoVenta").value);
    const cVariable = parseInt(document.getElementById("costoVariable").value);
    const resp = document.getElementById("answer");
  
    let cv = cFijo / (cVenta - cVariable);
    resp.innerHTML = cv;
    resp.classList.add("text-bg-secondary", "p-1")
  }