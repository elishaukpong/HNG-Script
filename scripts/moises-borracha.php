<?php

function returnMBData($greet="Hello World", $name="Moises Wenikeni Suquila Borracha", $email="moisesnt2@gmail.com", $code="HNG-00308", $lang="PHP", $task="stage 2 task"){
    return $greet .", this is ". $name ." with HNGi7 ID ". $code." and email ". $email ." using ". $lang ." for ". $task; 
}
echo returnMBData();

?>