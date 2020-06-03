<?php
$name = 'Victor Damilola Oyediran';
$id = 'HNG-00894';
$language = 'PHP';
$email = 'oyediran.viktor@gmail.com';

$message = "Hello World, this is $name with HNGi7 ID $id and email $email using $language for stage 2 task";

printMyMessage($message);

function printMyMessage($message) {
    echo $message;
}
