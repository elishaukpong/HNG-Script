<?php
class hng{
    public $name,$id,$email,$lang;
    function basic_html(){
        return "Hello World, this is ".$this->name." with HNGi7 ID HNG-".$this->id." and email ".$this->email." using ".$this->lang." for stage 2 task";
    }
    function json(){
        $d=[];
        $d["file"]="hassan-said.php";
        $d["output"]=$this->basic_html();
        $d["name"]=$this->name;
        $d["id"]="HNG-".$this->id;
        $d["email"]=$this->email;
        $d["language"]=$this->lang;
        $d["status"]="pass";
        return $d;
    }
    function __construct(){
        $this->lang="php";
        $this->name="Hassan Said";
        $this->id="06283";
        $this->email="kronikkronix@gmail.com";
    }
}
$c=new hng();
if(isset($_GET["json"])){
    echo json_encode($c->json());
}
else{
    echo $c->basic_html();
}