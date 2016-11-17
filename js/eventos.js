
// DOM = Modelo de objetos del documento

var inicio = function() //main
{
	var dameClic = function()
	{
	// alert("Le di clic a un boton");

	$.ajax({
  	url: 'https://randomuser.me/api/',
  	dataType: 'json',
  	success: function(data) {
  	$("#imgFoto").show("slow");
  	$("#txtNombre").show("slow");
  	// console.log(data.results[0].gender);
  	$("#txtNombre").val(data.results[0].name.first + " " + data.results[0].name.last);
  	$("#imgFoto").attr("src", data.results[0].picture.large);
  	console.log(data.results[0].name.first + " " + data.results[0].name.last);
  	$("#miArticle").html("Texto").show();
  	}
	});

	}
	$("#dameClic").on("click", dameClic);
}

//Inicializar nuestro Documento

//$(document).on("ready", function(){
	//Codigo o mas funciones
//});

$(document).on("ready", inicio);
