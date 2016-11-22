
<?php

	$txtOculto = "";
	$usuario = "";
	$nombre = "";
	$clave = "";
	$tipo = "";

	// Preguntar si los valores existen
	if (isset($_POST["txtOculto"])) // Si trae valores
	{
		$oculto = $_POST["txtOculto"];
	}
	if (isset($_POST["txtUsuario"])) // Si trae valores
	{
		$usuario = $_POST["txtUsuario"];
	}
	if (isset($_POST["txtNombre"])) // Si trae valores
	{
		$usuario = $_POST["txtNombre"];
	}
	if (isset($_POST["txtClave"])) // Si trae valores
	{
		$usuario = $_POST["txtClave"];
	}
	if (isset($_POST["txtTipo"])) // Si trae valores
	{
		$usuario = $_POST["txtTipo"];
	}

	function guardaUsuario($usuario, $nombre, $clave, $tipo)
	{
		// Conectarse al servidor MySQL
		// mysql_connect(servidor, usuario, contraseña)
		$conexion = mysql_connect("localhost", "root", "");
		// Seleccionamos la base de datos
		mysql_select_db("bd2163");
		$consulta = "insert into usuario valuee("'.$usuario."', ".$nombre.'"',".$clave"', ".$tipo")
		// Ejecutamos la consulta
		mysql_query($consulta);
		// Preguntamos si hubo insercion
		if (mysql_affected_rows() > 0)
		{
			print "Registro guardado";
		}
		else
		{
			print "No se pudo guardar el registro";
		}
	}

	switch ($oculto) {
		case 'guardaUsuario':
			guardaUsuario($usuario, $nombre, $clave, $tipo);
			break;
		
		default:
			# code...
			break;
	}

?>

<h1>Alta de usuarios<h1>
<form action="ejemplo2php.php" method="POST">
	<input type="hidden" name="txtOculto" id="guardaUsuario">
	<input type="text" name="txtUsuario" id="txtUsuario">
	<input type="text" name="txtNombre" id="txtNombre">
	<input type="text" name="txtClave" id="txtClave">
	<select name="txtTipo" id="txtTipo">
		<option value="administrador">Administrador</option>
		<option value="invitado">Invitado</option>
		<option value="colado">Colado</option>
	</select> <br>
	<input type="submit" value="Enviar">
</form>
