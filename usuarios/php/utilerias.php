
<?php

// Limpiar parametros contra ataques
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}

function validaUsuario()
{
  $respuesta = false;
	// Limpieza
	// $u = $_POST[""];
	$u = GetSQLValueString($_POST["Usuario"], "txt");
	// Limpieza
	// $c = $_POST[""];
	$u = GetSQLValueString($_POST["Clave"], "txt");
	$conexion = mysql_connect("localhost", "root", "");
  // Conexion a la base de datos
  mysql_select_db("bd2163")
	$consulta = sprintf("Select Usuario, Clave From Usuario Where Usuario =%s And Clave=%s limit 1", $u, $c);
  $resultado = mysql_query($consulta);
  // Esperamos un solo resultado
  if(mysql_num_rows($resultado) == 1)
  {
    $respuesta = true;
  }
  $arregloJSON = array('respuesta' => $respuesta);
  print json_encode($arregloJSON);
}

function buscaUsuario()
{
  $respuesta = false;
  $u = GetSQLValueString($_POST["usuario"], "text");
  $conexion = mysql_connect("localhost", "root", "");
  mysql_select_db("bd2163");
  $consulta = sprintf("Select * From Usuario Where Usuario=%s, $u")

  if (mysql_num_rows($resultado) > 0)
  {
    $arregloJSON = array('respuesta' => $respuesta,)
  }

}

// Menu principal
$opc = $_POST["opcion"];
switch ($opc) {
	case 'value':
		validaUsuario();
		break;
  case 'buscaUsuario':
    buscaUsuario();
    break;
	
	default:
		# code...
		break;
}

?>

