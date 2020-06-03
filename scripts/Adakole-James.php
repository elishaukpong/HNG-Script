<?php

function showDetailsreal()
{
    $HngInternId = "HNG-00276";
    $myfullname = 'Adakole Inalegwu James';
    $languageOfChoice = 'php';
    $email = "jambone.james822gmail.com";

    echo "Hello World, this is "
        + $myfullname + " with HNGi7 ID "
        + $HngInternId + " and email "
        + $email + " using "
        + $languageOfChoice + " for stage 2 task";
}

showDetailsreal();
