<?php 
	$action=$_POST['action'];
	switch ($action){

	case 'getPage':
		$page=$_POST['page'];
		require_once ('content-page.php');
	break;

	case 'getForm':
		$page=$_POST['page'];
		require_once ('form.php');
	break;

	case 'getFormWithId':
		$ids=$_POST['ids'];
		$page=$_POST['page'];
		require_once ('form.php');
	break;
}
?>
	