window.onload = inicio;

/*window.onload = function(){
	//var texto = "\"hola mundo\""; //"Let's Go!"; // '"hola mundo"';
	var texto = "Mensaje\n de\n varias\n lineas";
	alert(texto);
}*/

function inicio()
{
	// DECLARACION
	var mensaje = "Escoja la operacion asi:";
	mensaje = mensaje + "\n1. Suma";
	mensaje = mensaje + "\n2. Resta";
	mensaje = mensaje + "\n3. Multiplicacion";
	mensaje = mensaje + "\n4. Division";
	mensaje = mensaje + "\n5. Potencia";
	mensaje = mensaje + "\n6. Raiz";

	var operacion = prompt(mensaje);
	var a,b,c,d,e;
	//TODO LO QUE SE INGRESE CON EL TECLADO ES DE TIPO CADENA

	// Inicialización
	operacion = Number(operacion);
	
	if (operacion==1 || operacion==2 || operacion==3 || operacion==4) 
	{
		a = prompt("Ingrese a");
		b = prompt("Ingrese b");
		a = Number(a);
		b = Number(b);
	}
	else{
		if (operacion==5) 
		{
			c = prompt("Ingrese el exponente al que quiere elevar");
			d = prompt("Ingrese la base de su potencia");
			c = Number(c);
			d = Number(d);
		}
		else
		{
			if (operacion == 6) 
			{
				e = prompt("Ingrese el radicando de la raíz cuadrada");
				e = Number(e);
			}
		}
	}

	if(operacion == 1)
	{
		alert(a+b);
	}
	else
	{
		if (operacion == 2)
		{
			alert(a-b);
		}
		else
		{
			if (operacion == 3) 
			{
				alert(a*b);
			}
			else
			{
				if (operacion == 4) 
				{
					if (b != 0) 
					{
						alert(a/b);
					}
					else
					{
						alert("Error: División por cero");
					}		
				}
				else
				{
					if (operacion == 5) 
					{
						alert(Math.pow(d, c))
					}
					else
					{
						if (operacion == 6) 
						{
							alert(Math.sqrt(e))
						}
						else
						{
							alert("Error: valor fuera de los límites");
						}
					}
				}
			}
		}
	}

	/*else (operacion != 1,2,3,4) 
	{
		alert("Operacion no encontrada - Error sintaxis");
	}*/

	/*document.writeln(typeof a);
	document.writeln(typeof b);

	NaN - Not a Number

	console.log(a*b);
	document.write(a*b); */
}