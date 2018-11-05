<?php
include_once("./controllers/common.php");
include_once('./components/gradeshead.php');
include_once ('./models/student.php');
include_once ('./models/course.php');
include_once('./models/grade.php');
$id = safeGet('id');
Database::connect('sql113.epizy.com', 'epiz_22949451', 'school2018');
$grade = new Grade($id);
?>

    <h2 class="mt-4"><?=($id)?"Edit":"Add"?> Grade</h2>

    <form action="controllers/savegrade.php" method="post">
        <input type="hidden" name="id" value="<?=$grade->get('id')?>">
        <div class="card">
            <div class="card-body">
                <div class="form-group row gutters">

                    <?php if(!$id){ ?>
                        <label  class="col-sm-2 col-form-label">Student ID</label>
                        <select name="student_id" class="form-control">
                            <?php foreach( Student::all() as $student) { ?>
                              <option ><?=$student->id?>-<?=$student->name?></option>
                            <?php } ?>
                        </select>

                        <label  class="col-sm-2 col-form-label">Course ID</label>
                        <select name="course_id" class="form-control">
                            <?php foreach( Course::all() as $course) { ?>
                                <option ><?=$course->id?>-<?=$course->name?></option>
                            <?php } ?>
                        </select>

                        <br/>
                    <?php } else {
                        $student = new Student($grade->student_id);
                        $course = new Course($grade->course_id);
                        ?>
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Student name</label>
                        <input class="form-control" type="text"  value="<?=$student->name?>" readonly>
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Course name</label>
                        <input class="form-control" type="text"  value="<?=$course->name?>" readonly>
                    <?php } ?>
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Degree</label>
                    <input class="form-control" type="number" name="degree" value="<?=$grade->get('degree')?>" required>
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Examine Date</label>
                    <input class="form-control" type="date" name="examine_at" value="<?=$grade->get('examine_at')?>" required>

                    <div class="col-sm-10">

                    </div>
                </div>
                <div class="form-group">
                    <button class="button float-right" type="submit">Save</button>
                </div>
            </div>
        </div>
    </form>

<?php include_once('./components/tail.php') ?>