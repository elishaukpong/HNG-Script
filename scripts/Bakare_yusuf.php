<?php 
  class _MUser {
    private $firstname = 'Yusuf';
    private $lastname = 'Bakare';
    private $id = 'HNG-03691';
    private $language = 'PHP';

    public function output(){
      return "Hello World, this is {$this->firstname} {$this->lastname} with HNGi7 ID {$this->id} using {$this->language} for stage 2 task";
    }
  }

  $yusuf = new _MUser();
  print $yusuf->output() . "\n";
