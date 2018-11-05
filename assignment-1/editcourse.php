<?php
include_once("./controllers/common.php");
include_once('./components/courseshead.php');
include_once('./models/course.php');
$id = safeGet('id');
Database::connect('sql113.epizy.com', 'epiz_22949451', 'school2018');
$course = new Course($id);
?>

    <h2 class="mt-4"><?=($id)?"Edit":"Add"?> Course</h2>

    <form action="controllers/savecourse.php" method="post">
        <input type="hidden" name="id" value="<?=$course->get('id')?>">
        <div class="card">
            <div class="card-body">
                <div class="form-group row gutters">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                    <input class="form-control" type="text" name="name" value="<?=$course->get('name')?>" required>
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Maximum degree</label>
                    <input class="form-control" type="number" name="max_degree" value="<?=$course->get('max_degree')?>" required>
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Study year</label>
                    <input class="form-control" type="number" name="study_year" value="<?=$course->get('study_year')?>" required>
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