<?php
// Name, Email, HNGi7 ID  & Language Strings to be used for task
$fullname = "Egbekwu Nwanedilobu Uche";
$hng_id = "HNG-02761";
$tsk_lang = "PHP";
$email = "egbekwunwanedilobu@gmail.com";

//Message Strings
$msg1 = 'Hello World, this is '.$fullname;
$msg2 = 'with HNGi7 ID '.$hng_id;
$msg3 = 'and email '.$email;
$msg4 = 'using '.$tsk_lang;

//function to display Message with declared global variables
function display_Message(){
  global $fullname;  global $hng_id; global $tsk_lang;  
  global $email; global $msg1; global $msg2; 
  global $msg3;  global $msg4;

//Message Strings
$msg1 = 'Hello World, this is '.$fullname;
$msg2 = 'with HNGi7 ID '.$hng_id;
$msg3 = 'and email '.$email;
$msg4 = 'using '.$tsk_lang;
echo $msg1." ".$msg2." ".$msg3." ".$msg4. " for stage 2 task";
}
$func_Message = "display_Message();";
eval ($func_Message);
?>
