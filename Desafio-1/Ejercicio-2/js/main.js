function modeloPresupuestos(ingresoTotal) {
    let gNecesarios = ingresoTotal * 0.5;
    let gOpcionales = ingresoTotal * 0.3;
    let ahorroInversion = ingresoTotal * 0.2;

    console.log("Ingreso Total: " + ingresoTotal);
    console.log("---------------------------");
    console.log("Gastos Necesarios: " + gNecesarios);
    console.log("Gastos Opcionales: " + gOpcionales);
    console.log("Ahorro e Inverion: " + ahorroInversion);
}

modeloPresupuestos(25000);


