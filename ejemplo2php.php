
<h1>Alta de usuarios<h1>
<form action="registro_ejemplo.php" method="POST">
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
<hr>

<?php

	// Conecto al servidor
	$conexion = mysql_connect("localhost", "root", "");
	mysql_select_db("bd2163");
	$consulta = "Select * From Usiario Order by Usuario";
	// Ejecutando consulta
	$resultado = mysql_query($consulta);
	$tabla = "<table border=1>";
	$tabla = "<tr>";
	$tabla = "<th>Usuario</th><th>Nombre</th><th>Clave</th><th>Tipo</th>";
	$tabla = "</tr>";
	while ( $resultado = mysql_query($resultado) ) {
		$tabla.="<tr>"
		$tabla.="td".$registro["Usuario"]."</td";
		$tabla.="td".$registro["Nombre"]."</td";
		$tabla.="td".$registro["Clave"]."</td";
		$tabla.="td".$registro["TipoUsiario"]."</td";
		$tabla.="td".$registro["</tr>"]."</td";
	}
	$tabla.="</table>";
	print $tabla;
	
?>
