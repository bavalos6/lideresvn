<?php
// require_once('Elvanto_API.php');
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$genero = $_POST['genero'];
$edad = $_POST['ageShow'];
$estadoC = $_POST['estado_civil'];
$campus = $_POST['campus'];
$cercania = $_POST['cercania'];
$metas = $_POST['metas'];
$hobby = $_POST['hobby'];
$peli = $_POST['peli'];
$comida = $_POST['comida'];
$money = $_POST['500'];


// $auth_details = array('api_key' => 'JiFq36P4F8dWZlVf4gr9MxdaEmcdNcnI');
// $elvanto = new Elvanto_API($auth_details);


// $results2 = $elvanto->call('groups/addPerson', array('id'=>'c3664eaa-f8c8-4a97-b3ef-54586e348a6f', 'person_id'=>$id));



$data = [$fname,$lname,$genero,$edad,$estadoC,$campus,$cercania,$metas,$hobby,$peli,$comida,$money];

// open csv file for writing
$f = fopen("lideres.csv", "a");

// if ($f == false) {
// 	die('Error opening the file ' . $filename);
// }

// // write each row at a time to a file
fputcsv($f, $data);

// // close the file
fclose($f);

?>
<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
        Thank You
    </body>

</html>