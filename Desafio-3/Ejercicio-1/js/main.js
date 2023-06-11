const boton = document.getElementById("botonFlujo");

function calcularFlujo(){
    for(let i = 1; i<=12; i++){
        let a = parseInt(document.getElementById("one" + i).value);
        let b = parseInt(document.getElementById("two" + i).value);  
        

        if (isNaN(a)) a = 0;
        if (isNaN(b)) b = 0;

        let rFlujo = a - b

        let answer = document.getElementById("flujo"+i);

        answer.innerHTML = rFlujo;

        if(rFlujo<0){
           answer.classList.add("bg-danger") 
        } else if (rFlujo>0){
            answer.classList.add("bg-success")
        } else{
            answer.classList.add("bg-primary")
        }
    }
}

boton.addEventListener("click", f=>{
    calcularFlujo();
})