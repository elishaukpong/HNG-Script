<?php
    
    class HelloWorld {

        private $fName;
        private $lName;
        private $HNG_ID;
        private $email;
        private $language;

        function __construct($fName, $lName, $HNG_ID, $email, $language) {

            $this->fName = $fName;
            $this->lName = $lName;
            $this->HNG_ID = $HNG_ID;
            $this->email = $email;
            $this->language = $language;
            $this->custom_print();

        }

        function custom_print() {

            $output = "Hello World, this is "
                    .$this->fName. " " .$this->lName. 
                    " with HNGi7 ID " .$this->HNG_ID. " and email " .$this->email. 
                    " using " .$this->language. " for stage 2 task";

            print_r($output);
        }

    }

    $first_name = 'Jude';
    $last_name = 'Biose';
    $HNG = 'HNG-01207';
    $email = 'Judebiose20@gmail.com';
    $lang = 'PHP';

    $obj = new HelloWorld($first_name, $last_name, $HNG, $email, $lang);