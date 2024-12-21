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
    sceltaBevanda = prompt("Scegli la tua bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra");

    if (sceltaBevanda === "1") {
        console.log("E' stata selezionata l'acqua");
    }else if (sceltaBevanda === "2") {
        console.log("E' stata selezionata Coca Cola");
    }else if (sceltaBevanda === "3") {
        console.log("E' stata selezionata Birra");
    }else {
            console.log("La tua scelta non è valida. Riprova");
    }
}while (sceltaBevanda !== "1" && sceltaBevanda !== "2" && sceltaBevanda !== "3");