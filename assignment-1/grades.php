<?php
include_once('./controllers/common.php');
include_once('./components/gradeshead.php');
include_once('./models/student.php');
include_once('./models/course.php');
include_once('./models/grade.php');
Database::connect('sql113.epizy.com', 'epiz_22949451', 'school2018');

?>
<div style="padding: 10px 0px 10px 0px; vertical-align: text-bottom;">
    <span style="font-size: 125%;">Grades</span>
    <button class="button float-right edit_grade" id="0">Add Grade</button>
</div>

<table class="table table-striped">
    <thead>
    <tr>

        <th scope="col" >Student ID</th>
        <th scope="col" >Student name</th>
        <th scope="col" >Course name</th>
        <th scope="col" >Degree</th>
        <th scope="col" >Examine Date</th>
        <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <?php
    $students = Student::all(safeGet('keywords'));
    $courses_id = Course::get_ids(safeGet('Cname'));

    foreach ($students as $student){
        $grades = Grade::get_grades($student->id);
        $n=0;


        foreach ($grades as $grade){
            for ($j=0;$j<count($courses_id);$j++){
                if ($courses_id[$j]==$grade->course_id){
                    if ($n!=0){?><tr><td></td><td></td><?php } else { ?><tr><td><?=$student->id?></td><td><?=$student->name?></td><?php } ?>
       <?php
                    $n++;
                $course = new Course($courses_id[$j]);


         ?>

            <td><?=$course->name?></td>
            <td><?=$grade->degree?></td>
             <td><?=$grade->examine_at?></td>
            <td>
                <button class="button edit_grade" id="<?=$grade->id?>">Edit</button>&nbsp;
                <button class="button delete_grade" id="<?=$grade->id?>">Delete</button>
            </td>
            </tr>


        <?php }}}} ?>




    </tbody>
</table>

<?php include_once('./components/tail.php') ?>

<script type="text/javascript">
    $(document).ready(function() {
        $('.edit_grade').click(function(event) {
            window.location.href = "editgrade.php?id="+$(this).attr('id');
        });

        $('.delete_grade').click(function(){
            var anchor = $(this);
            $.ajax({
                url: './controllers/deletegrade.php',
                type: 'GET',
                dataType: 'json',
                data: {id: anchor.attr('id')},
            })
                .done(function(reponse) {
                    if(reponse.status==1) {
                        anchor.closest('tr').fadeOut('slow', function() {
                            $(this).remove();
                            location.reload();
                        });
                    }
                })
                .fail(function() {
                    alert("Connection error.");
                })
        });
    });
</script>