var nombre="Giselle"
var email="gismb03@gmail.com"
var edad = 19

function getNombre() {
 console.log(nombre);
 var myNameElement = document.getElementById("nombre");
 myNameElement.innerHTML = nombre;
}

function getEmail() {
 console.log(email);
 var myEmailElement = document.getElementById("email");
 myEmailElement.innerHTML = '<b>' + email + '</b>';
}

function getEdad() {
 console.log(edad);
 var myEdadElement = document.getElementById("edad");
 myEdadElement.innerHTML = '<h3>'  + edad + '</h3>';
 myEdadElement.style.color = "#00000FF";
}

