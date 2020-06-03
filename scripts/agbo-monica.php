<?php

//Object oriented PHP for task 2




class MyBiodata{
        //variable declaration

        public $HID;
        public $fname;
        public $email;
        public $language;
 
    public function displayBiodata(){

        return "Hello World, this is " 
                .$this->fname." with HNGi7 ID "
                .$this->HID." and email "
                .$this->email. " using "
                .$this->language." for stage 2 task";
        }
}

$bio = new MyBiodata; // instance of class MyBiodata

$bio->HID = "HNG-03531";
$bio->fname = "Agbo Monica Onyemowo";
$bio->email = "agbomonica.am@gmail.com";
$bio->language = "PHP";

print $bio->displayBiodata(); //function call
?>