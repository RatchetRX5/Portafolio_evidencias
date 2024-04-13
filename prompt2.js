function multi(){
	var num; 
	num=prompt('Ingresa un numero(1-10)','');
	num=parseInt(num);	
	document.write("<table>");
	document.body.style.backgroundColor = "#EFF594";
	document.body.style.marginLeft = 600;
	document.body.style.marginTop = 250;

	var x=1;
	for (x=1;x<=10;x++){
		tabla=num*x;
		document.write("<tr>");
		document.write("<td>");
		document.write(num," x ",x," = ",tabla," <br>");
		document.write("</td>");
		document.write("</tr>");
	}
	document.write("</table>");
}

