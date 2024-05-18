/*funcion que recibe una palabra, la recibe como la variable "cadena" 
y comienza a evaluarla para saber si es un palindromo o no*/
function palindromo() {
	var cadena = document.getElementById('palabra').value/*Recibe la palabra y se la da ala variable*/
	var res = "La frase \""+cadena+"\" \n";/*Aqui comienza la concatenacion con la palabra original*/
	var cadenaOriginal = cadena.toLowerCase();/*La convierte a minusculas*/
	var letrasEspacios = cadenaOriginal.split("");/*Va separando letra por letra*/
	var cadenaSinEspacios = "";//Funciona para dar una cadena nueva
	for(i in letrasEspacios) {
		if(letrasEspacios[i] != " ") {
		cadenaSinEspacios += letrasEspacios[i];//Aqui dentro se va asignano y cocatenando la palabra en caso de que tenga espacios
		}
	}
	var letras = cadenaSinEspacios.split("");//Aqui nuevamente se van contando las letras
	var letrasReves = cadenaSinEspacios.split("").reverse();//Aqui empieza pero ahora por la ultima letra de la cadena
	var iguales = true;//Variable booleana que empieza definiendo la condicion verdadera
	for(i in letras) {
		if(letras[i] == letrasReves[i]) {//comparacion de ambas cadenas
		}else{
			iguales = false;//se agrego el brake para salir directamente en caso de no encontrar la palabra
			break;
		}
	}
	if(iguales) {
		res += " es un palíndromo";
	}else {
		res += " no es un palíndromo";
	}
	
	document.getElementById('resultado').innerHTML = res;//Se concatenan los res anteriores y manda el resultado al parrafo con el ide "res"
}
//var cad=prompt("Frase a evaluar: ","");
//alert(palindromo(cad));