<?php
    
    class HelloWorld {

        private $fName;
        private $lName;
        private $HNG_ID;
        private $language;

        function __construct($fName, $lName, $HNG_ID, $language) {

            $this->fName = $fName;
            $this->lName = $lName;
            $this->HNG_ID = $HNG_ID;
            $this->language = $language;
            $this->custom_print();

        }

        function custom_print() {

            echo "Hello World, this is "
                .$this->fName. " " .$this->lName. 
                " with HNGi7 ID " .$this->HNG_ID. " using " 
                .$this->language. " for stage 2 task";

        }

    }

    $obj = new HelloWorld('Jude', 'Biose', 'HNG-01207', 'PHP');