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

<?php

?>
