<?php

$nameMe = 'Otu Ekong';
$HNG7iID = 'HNG-02060';
$backendLang = 'PHP';
$devEmail = 'devquie@gmail.com';

function stageTask($name, $hngid, $email, $lang) {
    if (isset($email)) {
        return "Hello World, this is {$name} with HNGi7 ID {$hngid} and email {$email} using {$lang} for stage 2 task.";
    }
}

$result = stageTask($nameMe, $HNG7iID, $devEmail, $backendLang);
print($result);
