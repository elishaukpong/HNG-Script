<?php

$files = scandir("scripts/");

unset($files[0]);
unset($files[1]);
print_r($files);
exit;
$output = [];

foreach($files as $file){

    $extension = explode('.', $file)[1];


    switch($extension){
        case 'php':
            $startScript = "php";
            break;
        case 'js':
            $startScript = "node";
            break;
        case 'py':
            break;
    }

    $f = exec($startScript . " scripts/".$file);
    $output[] = ['content' => $f, 'status' => testFileContent()];
}

function testFileContent(){
    return 'pass';
}

function can_run_command($module = ''){
    return exec($module);
}


var_dump($output);