<?php

function returnMBData($greet="Hello World", $name="Moises Wenikeni Suquila Borracha",$code="HNG-00308", $lang="PHP", $task="stage 2 task."){
    return $greet .", this is ". $name ." with HNGi7 ID ". $code ." using ". $lang ." for ". $task; 
}
echo returnMBData();

?>