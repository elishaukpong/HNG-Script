<?php
// Simple function to print details
    function printDetails($name, $hngID, $email, $language)
    {

        return "Hello World, this is ". $name . " with HNGi7 ID " . $hngID . " and email ". $email . " using " . $language . " for stage 2 task";
    }

    echo printDetails("Jonah Jackson Joseph", "HNG-01443", "jonahjacksonj@gmail.com", "php");

?>
