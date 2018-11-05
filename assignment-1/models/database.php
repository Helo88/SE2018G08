<?php
  $uid = "epiz_22949451";
  $pwd = "school2018";
  $database = "sql113.epizy.com";
	class Database {
		protected static $db = null;

		public static function connect($database, $uid, $pwd) {
			if(!empty(Database::$db)) return;

			$dsn = "mysql:host=sql113.epizy.com;dbname=epiz_22949451_school";

			try {
		   		Database::$db = new PDO($dsn, $uid, $pwd);

			} catch(PDOException $e){
		   		echo $e->getMessage();
			}
		}

		public function get($field) {
			if(isset($this->{$field}))
				return $this->{$field};
			return null;
		}
	}
?>
