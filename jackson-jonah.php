<?php
// Simple function to print details
    function printDetails($name, $hngID, $language)
    {

        return "Hello World, this is ". $name . " with HNGi7 ID " . $hngID . " using " . $language . " for stage 2 task";
    }

    echo printDetails("Jonah Jackson Joseph", "HNG-01443", "php");

?>