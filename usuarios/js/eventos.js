
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
				if (response.respuesta) {
					$("#entradaUsuario").hide();
					$("nav").show();
				}
				else {
					alert("Datos incorrectos :(")
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				// Si todo sale mal
			}
		});

	}
	$("#btnValidaUsuario").on("click", validaUsuario);
}

// Evento inicial
$(document).on("ready", inicioUsuarios);