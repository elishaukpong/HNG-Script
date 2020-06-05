<?php
class MyDetailHNG
{
    public $email;
    public $HngInternId;
    public $myfullname;
    public $languageOfChoice;

    public function showDetails()
    {

        $string = "Hello World, this is "
            . $this->myfullname . " with HNGi7 ID "
            . $this->HngInternId . " and email "
            . $this->email . " using "
            . $this->languageOfChoice . " for stage 2 task";

        return $string;
    }
}

$data = new MyDetailHNG;

$data->HngInternId = "HNG-00274";
$data->myfullname = "Adakole Inalegwu James";
$data->email = "jambone.james82@gmail.com";
$data->languageOfChoice = "PHP";

$giveOut = $data->showDetails();
print $giveOut;
