
function soloNumeros(e){

	key=e.keyCode || e.which; 
	teclado=String.fromCharCode(key); 
	numeros="0123456789";
	especiales="8-37-39-46"; 
	tecla_especial=false;

	for(var i in especiales){
		if (key==especiales[i]) {
			tecla_especial=true;
		}
	}
	if(numeros.indexOff(teclado)==-1 && !tecla_especial){ 
		return false;

	}

}


function retornar(num){
	var anterior=document.form.valores.value;
	document.getElementById("valores").value=anterior+num;
}


function eliminar(){
	var anterior=document.form.valores.value;
	var nuevovalor=anterior.substring(0,anterior.length-1);
	document.getElementById("valores").value=nuevovalor;
}


function eliminarTodo(){
	document.form.valores.value="";
}


function calcular(){
