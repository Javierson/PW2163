
var inicioUsuarios = function ()
{
	var validaUsuario = function()
	{
		// Extraer los dato de los input en el HTML
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		// Preparar los parametros para AJAX
		var parametros = "opcion=valida" +
							"&usuario=" + usuario +
							"&clave=" + clave +
							"&id=" + Math.random();
		// Validamos que no esten vacios
		if (usuario!="" && clave!="") {
		// Hacemos la peticion remota
		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url: "php/utilerias.php",
			data: parametros,
			success: function(response) {
				// Si todo sale bien
				// Esto no es optimo
				//if (response.respuesta == true) {
				if (response.respuesta == true) {
					$("#entradaUsuario").hide("slow");
					$("nav").show("slow");
				}
				else {
					alert("Datos incorrectos :(");
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				// Si todo sale mal
			}
		});

	}
	else
	{
		alert("Usuario y clave son obligatorios")
	}
}
	$("#btnValidaUsuario").on("click", validaUsuario);
	var teclaClave = function(tecla)
	{
		if (tecla.which == 13) { // Tecla enter
			validaUsuario(); // Funcion que valida al usuario
		}
	}
	var Alta = function()
	{
		$("#artAltaUsuarios").show("slow");
	}
	// Keypress: se ejecuta cada vez que presiono una tecla sobre el input
	$("#txtClave").on("keypress", teclaClave);
	$("#btnAlta").on("click", Alta);
	$("#btnGuardaUsuario").on("click", GuardaUsuario);
}
// Evento inicial
$(document).on("ready", inicioUsuarios);
