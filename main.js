// let bevanda = Number(prompt("Scegli la tua bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra"));

// if (bevanda == 1) {
//     console.log("E' stata selezionata l'acqua");
// }else if (bevanda == 2) {
//     console.log("E' stata selezionata Coca Cola");
// }else if (bevanda == 3) {
//     console.log("E' stata selezionata Birra");
// }else {
//         Number(prompt("La tua scelta non è valida. Scegli tra:\n1 - Acqua\n2 - Coca Cola\n3 - Birra"));
// }

// EXTRA

let sceltaBevanda;

do {
    sceltaBevanda = Number(prompt("Scegli la tua bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra"));

    switch (sceltaBevanda) {
        case 1:
            console.log("E' stata selezionata l'acqua");
            break;
        case 2:
            console.log("E' stata selezionata Coca Cola");
            break;
        case 3:
            console.log("E' stata selezionata Birra");
            break;
        default:
            console.log("La tua scelta non è valida. Riprova");
        }
}while (sceltaBevanda < 1 || sceltaBevanda > 3);