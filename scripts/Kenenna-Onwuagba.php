<?php

$name = "Kenenna Onwuagba";
$id = "HNG-02948";
$lang = "PHP";

function myHello($name, $id, $lang) {
	$content = "Hello World, this is ".$name." with HNGi7 ID" . $id . "  using " . $lang ." for stage 2 task";
	return $content;
}

echo myHello($name, $id, $lang);
?>