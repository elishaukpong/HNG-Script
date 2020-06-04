<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$myObj->name = "Adeyemi Timilehin Mike";
$myObj->ID = "02251";
$myObj->language = "php";
$myObj->Email="adeyemitimmy@gmail.com"
$name="Adeyemi Timilehin Mike";
$id="HNG-2251";
$language="php";
$email="adeyemitimmy@gmail.com";
$myJSON = json_encode($myObj);

echo $myJSON;

echo "\nHello world,this is $name with HNG i7 ID $id and email $email using $language for stage 2 task

flush();
?>
