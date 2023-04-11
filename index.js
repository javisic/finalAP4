const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const nombre = document.getElementById("nombre")
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
            form2.classList.toggle("d-none")
            form3.classList.toggle("d-none")
            mostrar();
            calculoIMC();
            break;
        case 'salir':
            form3.classList.toggle("d-none")
            form1.classList.toggle("d-none")
            limpiar()
        default:
            break;
    }

}

function mostrar(){
console.log(`
email: ${email.value}
teléfono: ${telefono.value}
nombre: ${nombre.value}
`)
}

function limpiar(){
form1.reset ()
form2.reset ()
form3.reset ()    
}
 
 
function calculoIMC(){


const peso = document.getElementById("peso").value;
const altura = document.getElementById("altura").value;
const imc = document.getElementById("imc");
 
    const resultado = peso/(altura*altura)
    console.log("IMC", resultado)
        
imc.textContent = `El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos, pero mantener un peso dentro del rango saludable es importante para la salud general a medida que envejece

Por debajo de 18.5	Bajo peso
18.5—24.9	Peso saludable
25.0—29.9	Sobrepeso
30.0 o más	Obesidad

${nombre.value} tu IMC es ${resultado}`

}