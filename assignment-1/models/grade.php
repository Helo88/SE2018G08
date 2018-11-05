<?php
include_once('database.php');

class Grade extends Database{
    function __construct($id) {
        $sql = "SELECT * FROM grades WHERE id = $id;";
        $statement = Database::$db->prepare($sql);
        $statement->execute();
        $data = $statement->fetch(PDO::FETCH_ASSOC);
        if(empty($data)){return;}
        foreach ($data as $key => $value) {
            $this->{$key} = $value;
        }
    }

    public static function add($student_id,$course_id,$degree,$examine_at) {
        $sql = "INSERT INTO grades (student_id,course_id,degree,examine_at) VALUES ('$student_id','$course_id','$degree','$examine_at');";
        Database::$db->prepare($sql)->execute();
    }

    public function delete() {
        $sql = "DELETE FROM grades WHERE id = $this->id;";
        Database::$db->query($sql);
    }

    public function save() {
        $sql = "UPDATE grades SET  degree = ? , examine_at = ? WHERE id = ?;";
        Database::$db->prepare($sql)->execute([$this->degree, $this->examine_at,$this->id]);
    }

    public static function all($keyword) {
        $keyword = str_replace(" ", "%", $keyword);
        $sql = "SELECT * FROM grades WHERE student_id like ('%$keyword%');";
        $statement = Database::$db->prepare($sql);
        $statement->execute();
        $grades = [];
        while($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $grades[] = new Grade($row['id']);
        }
        return $grades;
    }
    public  static function get_grades($student_id){
        $sql = "SELECT * FROM grades WHERE student_id = '$student_id'";
        $stat = Database::$db->prepare($sql);
        $stat->execute();
        $grades = [];
        while($row = $stat->fetch(PDO::FETCH_ASSOC)){
            $grades[]=new Grade($row['id']);
        }
        return $grades;
    }


    public  static function update_courses($id)
    {
        $sql = "DELETE  FROM grades WHERE course_id = '$id' ;";
        Database::$db->query($sql);
    }
    public  static function update_students($id)
    {
        $sql = "DELETE  FROM grades WHERE student_id = '$id' ;";
        Database::$db->query($sql);
    }

}
?>