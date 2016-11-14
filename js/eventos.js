
// DOM = Modelo de objetos del documento

var inicio = function() //main
{
	var dameClic = function()
	{
	alert("Le di clic a un boton");
	}
	$("#dameClic").on("click", dameClic);
}

//Inicializar nuestro Documento

//$(document).on("ready", function(){
	//Codigo o mas funciones
//});

$(document).on("ready", inicio()
