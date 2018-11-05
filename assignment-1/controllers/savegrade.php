<?php
include_once("../controllers/common.php");
include_once("../models/grade.php");
Database::connect('sql113.epizy.com', 'epiz_22949451', 'school2018');
$id = safeGet("id", 0);
$degree= safeGet('degree');
$examine_at= safeGet('examine_at');
$student_id = safeGet('student_id');
$course_id = safeGet('course_id');
if($id==0) {
    Grade::add($student_id,$course_id,$degree,$examine_at);
} else {
    $grade = new Grade($id);
    $grade->degree = $degree;
    $grade->examine_at = $examine_at;
    $grade->save();
}
header('Location: ../grades.php');
?>
