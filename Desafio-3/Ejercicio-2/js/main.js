const boton = document.getElementById("botonCalcular");

let plan = [];

function agregarArray(){
    for(var i = 1; i <= 3; i++){
        var cap = parseInt(document.getElementById("capital"+i).value);
        var tasas = document.querySelectorAll(".tasa"+i);
        var plazos = document.querySelectorAll(".plazo"+i);
        var intereses = document.getElementById("interes"+i);
        var totales = document.getElementById("total"+i);   

        if(isNaN(cap)) cap = 0;
        tasas.forEach(function(tasa) {
            plazos.forEach(function(plazo){
                var ta = parseInt(tasa.dataset.value);
                var pl = parseInt(plazo.dataset.value);
                var resul = (cap * pl * (ta/100)) / 100;
                var tot = resul + cap;
                
                var nPlan = {
                    capital: cap,
                    tasa: ta,
                    plan: pl,
                    interes: resul,
                    total: tot
                }
                plan.push(nPlan)

                intereses.innerHTML = nPlan.interes;
                totales.innerHTML = nPlan.total;
            })
        }); 
    }
    console.log(plan);
}

boton.addEventListener("click", f=>{
    agregarArray();
})