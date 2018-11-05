<?php
include_once("../controllers/common.php");
include_once("../models/course.php");
Database::connect('sql113.epizy.com', 'epiz_22949451', 'school2018');
$id = safeGet("id", 0);
$name = safeGet("name");
$max_degree = safeGet("max_degree");
$study_year = safeGet("study_year");
if($id==0) {
    Course::add($name,$max_degree,$study_year);
} else {
    $course = new Course($id);
    $course->name = $name;
    $course->max_degree = $max_degree;
    $course->study_year = $study_year;
    $course->save();
}
header('Location: ../courses.php');
?>
