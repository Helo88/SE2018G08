<?php
	header('Content-Type: application/json; charset=utf-8');
	include_once("../models/student.php");
    include_once("../models/grade.php");
Database::connect('sql113.epizy.com', 'epiz_22949451', 'school2018');
	$student = new Student($_GET['id']);
	$student->delete();
	Grade::update_students($_GET['id']);
	echo json_encode(['status'=>1]);
?>
