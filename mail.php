<?php
//get data from form  
$name = $_POST['name'];
$contact = $_POST['contact'];
$subject = $_POST['subject'];
$email= $_POST['email'];
$comment= $_POST['comment'];
$to = "rajiv.hada@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n Contact = " . $contact . "\r\n Subject = " . $subject . "\r\n Email = " . $email . "\r\n Comment =" . $comment;
$headers = "From: Shistitech";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>