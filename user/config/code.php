<?php 
	$action=$_POST['action'];
	  switch ($action){

		case 'getForm':
			$page=$_POST['page'];
			require_once ('form.php');
		break;

	case 'resetPassword':
		$page=$action;
		require_once ('form.php');
	break;

	
}
?>
	