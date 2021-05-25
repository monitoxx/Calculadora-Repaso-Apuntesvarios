window.onload = inicio4;

function inicio1 (){
	var html = "";
	var contador = 1900;
	var lista = document.getElementById('lista');

	while(contador<=2021)
	{
		html = html + "<option value='"+contador+"'>"+contador+"</option>";
		contador = contador + 1;
	}
	lista.innerHTML = html;
}
function inicio2 (){
	var html = "";
	var contador = 50;
	var lista = document.getElementById('lista');

	do
	{
		html = html + "<li>"+contador+"</li>";
		contador = contador + 1;

	}while(contador<=70);

 	lista.innerHTML = html;
}
function inicio3(){
	var html = "";
	var inicio = 50;
	var fin = 1000;
	var lista = document.getElementById("resultados");

	for (var i = inicio; i <= fin; i++) 
	{
		html = html + '<div class="columna '+(i%2==0?'naranja':'gris')+'">'+i+'</div>';
	}

	lista.innerHTML = html;
}
function inicio4(){

	var html = "";
	// var inicio = 1;
	var fin = 100;
	var grid = document.getElementById("cuadricula");
	var contador = 1; // aca inicio

	while(contador<=fin)
	{
		if (contador%2==0) //Quiere decir que los que sean igual a cero(serán los pares) sea verdadero, sino ejecuta else.
		{
			html = html + '<input type="button" class="naranja" value="'+contador+'">' // concatené la variable contador (para que haya 1, 2 , 3.. 100)
		}
		else{
			html = html + '<input type="button" class="gris" value="'+contador+'">' // ese + luego de html quiere decir que a la variable html (que estaba vacía) le agrego input
		}
		contador = contador + 1; // le sumo 1 para que el ciclo no sea infinito y en algún momento se vuelva falso; 
		//además le cambio el valor automáticamente, sin necesidad de copy-paste
	}

	grid.innerHTML = html; // el grid está almacenando y procesando la información (ahí están todos los input del 1 al 100)
}