<?php

$nameMe = 'Otu Ekong';
$hngi7Id = 'HNG-02060';
$backendLang = 'PHP';
$devEmail = 'devquie@gmail.com';

function stageTask($name, $hngid, $email, $lang) {
    if (isset($email)) {
        return "Hello World, this is {$name} with HNGi7 ID {$hngid} and email {$email} using {$lang} for stage 2 task.";
    }
}

$result = stageTask($nameMe, $hngi7Id, $devEmail, $backendLang);
print($result);
