const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const peso = document.getElementById("peso")
const altura = document.getElementById ("altura")

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const btnform = document.getElementsByClassName("btn-form");


for (let i = 0; i < 4 ; i++) {
    
 btnform[i].addEventListener("click", multiboton)
}


function multiboton(e) {
e.preventDefault();
    switch (e.target.id) {
        case 'siguiente':
            form1.classList.toggle("d-none")
            form2.classList.toggle("d-none")
            break;
        case 'anterior':
            form2.classList.toggle("d-none")
            form1.classList.toggle("d-none")
            break;
        case 'siguiente2':
           calculoimc();
            break;
        case 'salir':
            form3.classList.toggle("d-none")
            form1.classList.toggle("d-none")
        default:
            break;
    }

}
 
/*
function calculoimc() {
(peso/altura)*100

si el resultado es mayor a 25 "usted tiene sobrepeso"
si es menor a 18 "usted esta por debajo del peso ideal"
si no "usted esta dentro de los limites normales"

texto en comun con el resultado del IMC

"Tomar buenas decisiones a la hora de comer
ayuda a controlar el peso y reducir el riesgo de sufrir ciertas enfermedades crónicas"

}