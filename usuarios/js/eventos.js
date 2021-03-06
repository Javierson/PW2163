
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

	var teclaUsuario = function(tecla)
	{
		if (tecla.which == 13) // Enter
			{
				var usuario = $("#txtUsuarioNombre").val();
				var parametros = "opcion=buscarUsuario" +
									"&usuario=" + usuario +
									"&id="+Math.random();
				$.ajax({
					cache:false,
					type:"POST",
					dataType:"json",
					url:"php/utilerias.php",
					data:parametros,
					success:function(response)
					{
						
					}
				})
			}
	}

	var Alta = function()
	{
		$("h2").html("Alta de usuarios");
		$("#artAltaUsuarios").show("slow");
		// Escondo todos los botones
		// contenidos en artAltaUsuarios
		$("#artAltaUsuarios > button").hide();
		$("#btnBajaUsuario").show();
	}

	var Cambio = function()
	{
		$("h2").html("Cambio de usuarios");
		$("#artAltaUsuarios").show("slow");
		// Escondo todos los botones
		// contenidos en artAltaUsuarios
		$("#artAltaUsuarios > button").hide();
		$("#btnBajaUsuario").show();
	}

	// Keypress: se ejecuta cada vez que presiono una tecla sobre el input
	$("#txtClave").on("keypress", teclaClave);
	$("#btnAlta").on("click", Alta);
	$("#btnBaja").on("click", Baja);
	$("#btnCambio").on("click", Cambio);
	$("#txtUsuarioNombre").on("keypress", teclaClave);
	$("#btnGuardaUsuario").on("click", GuardaUsuario);
}
// Evento inicial
$(document).on("ready", inicioUsuarios);
