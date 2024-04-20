function evalua(){
	var cad = document.getElementById('cadena').value;
	const mayus = /[A-Z]/.test(cad);
	const minus = /[a-z]/.test(cad);
	let mensaje = "";
	if(mayus && minus){
		mensaje = "La cadena de caracteres "+cad+" contiene mayúsculas y minúsculas";
	}else{
		if (mayus){
			mensaje = "La cadena de caracteres "+cad+" contiene solamente mayúsculas";
		}else{
			mensaje = "La cadena de caracteres "+cad+" contiene solamente minúsculas";
		}
	}

	document.getElementById("parrafo").innerHTML = mensaje;
}