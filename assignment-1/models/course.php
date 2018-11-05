<?php

include_once ('database.php');

class Course extends Database
{
    function __construct($id) {
        $sql = "SELECT * FROM courses WHERE id = $id;";
        $statement = Database::$db->prepare($sql);
        $statement->execute();
        $data = $statement->fetch(PDO::FETCH_ASSOC);
        if(empty($data)){return;}
        foreach ($data as $key => $value) {
            $this->{$key} = $value;
        }
    }

    public static function add($name,$max_degree,$study_year) {
        $sql = "INSERT INTO courses (name,max_degree,study_year) VALUES ('$name','$max_degree','$study_year');";
        Database::$db->prepare($sql)->execute();
    }

    public function delete() {
        $sql = "DELETE FROM courses WHERE id = $this->id;";
        Database::$db->query($sql);
    }

    public function save() {
        $sql = "UPDATE courses SET name = ? , max_degree = ? , study_year = ? WHERE id = ?;";
        Database::$db->prepare($sql)->execute([$this->name, $this->max_degree, $this->study_year, $this->id]);
    }

    public static function all($keyword) {
        $keyword = str_replace(" ", "%", $keyword);
        $sql = "SELECT * FROM courses WHERE name like ('%$keyword%');";
        $statement = Database::$db->prepare($sql);
        $statement->execute();
        $courses = [];
        while($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $courses[] = new Course($row['id']);
        }
        return $courses;
    }
    public static function get_ids($keyword) {
        $keyword = str_replace(" ", "%", $keyword);
        $sql = "SELECT * FROM courses WHERE name like ('%$keyword%');";
        $statement = Database::$db->prepare($sql);
        $statement->execute();
        $courses_ids = [];
        while($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $courses_ids[] =$row['id'];
        }
        return $courses_ids;
    }

}

?>