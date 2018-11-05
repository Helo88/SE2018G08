<?php
header('Content-Type: application/json; charset=utf-8');
include_once("../models/course.php");
include_once ("../models/grade.php");
Database::connect('sql113.epizy.com', 'epiz_22949451', 'school2018');
$course = new Course($_GET['id']);
$course->delete();
Grade::update_courses($_GET['id']);
echo json_encode(['status'=>1]);
?>
