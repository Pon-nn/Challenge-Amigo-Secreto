//Arrays
/*En este array se almacenaran los nombres que se vayan ingresando*/
let nombresIngresados = [];


//Variables
/*Una variable que puede servir para cambiar la cantidad minima de nombres a ingresar*/
let minimoNombres = 3;


//Funciones

/*Funcion que permitira agregar amigos al array cuando se escribe en una caja en el html*/
function agregarAmigo() {
    let añadirAmigo = document.getElementById('amigo').value;
    if (!añadirAmigo)  {
        alert ('Por favor, coloque un nombre.');
    } else {
        nombresIngresados.push(añadirAmigo);
        limpiarCampo();
        mostrarAmigos();  
        console.log(nombresIngresados);
    }   
}

/*Funcion que permitira mostrar los nombres ya ingresados en una lista ul del archivo html*/ 
function mostrarAmigos() {
    let listadoAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i = 0; i < nombresIngresados.length; i++) {
        let item = document.createElement('li');
        item.textContent = nombresIngresados[i]
        listaAmigos.appendChild(item);
    }
}

/*Funcion que permitira seleccionar un amigo secreto del array al azar*/ 
function sortearAmigo() {
    if (nombresIngresados.length < minimoNombres) {
        alert(`Tiene que añadir al menos ${minimoNombres} nombres.`);
    } else {
        let nombreSorteado = nombresIngresados[Math.floor(Math.random()*nombresIngresados.length)];
        let sorteo = document.getElementById('resultado');
        console.log(nombreSorteado)
        resultado.innerHTML = `Tu amigo secreto es: ${nombreSorteado}`;

    }
}

/*Funcion para limpiar el campo de texto donde se ingresan los nombres despues de haber ingresado 1*/
function limpiarCampo() {
    let valorCampo = document.getElementById('amigo');
    valorCampo.value = '';
}