<?php
// require_once('Elvanto_API.php');

if(isset($_POST['f_name']) && isset($_POST['l_name'])){
    $firstName = $_POST['f_name'];
    $lastName = $_POST['l_name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $genero = $_POST['genero'];
    $estado_civil = $_POST['estado_civil'];
}

$realEC = $estado_civil;


if($genero == 'Mujer'){
    $genero = 'Female';
}
else{
    $genero = 'Male';
}

if($estado_civil == "Divorciado"){
    $estado_civil = "Soltero";
}

// $auth_details = array('api_key' => 'JiFq36P4F8dWZlVf4gr9MxdaEmcdNcnI');
// $elvanto = new Elvanto_API($auth_details);


// $results = $elvanto->call('people/create', array('firstname'=>$firstName, 'lastname'=>$lastName, 'email'=>$email, 'mobile'=>$mobile, 'fields'=>array('gender'=>$genero, 'demographics'=>array("Adultos",$estado_civil))));
// $data = $results->person->id;
// var_dump($results);

header("Location: quizLideres.php?fname=$firstName&lname=$lastName&genero=$genero&estado_civil=$realEC");
?>