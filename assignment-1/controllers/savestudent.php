<?php
	include_once("../controllers/common.php");
	include_once("../models/student.php");
	Database::connect('sql113.epizy.com', 'epiz_22949451', 'school2018');
	$id = safeGet("id", 0);
    $name =safeGet("name");
	if($id==0) {
		Student::add($name);
	} else {
		$student = new Student($id);
		$student->name =  $name;
		$student->save();
	}
	header('Location: ../students.php');
?>
