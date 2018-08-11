<?php
//data/users/login.php
require_once("../init.php");
$phone=$_REQUEST["phone"];
$upwd=$_REQUEST["upwd"];
$reg="/^((0086)|(\+86))?(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/";
$re=preg_match($reg,$phone);
if(!$re){
    die("['ok'=>0]");
}
$reg="/^.*(?=[\w!@#$%^&*?\(\),]{8,16})(?=.*\d+)(?=.*[A-Z]*)(?=.*[a-z]+).*$/";
$re=preg_match($reg,$upwd);
if(!$re){
    die("['ok'=>0]");
}
$upwd=md5($upwd);
$sql="select uid,phone,upwd from ck_user where phone='$phone' and  upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row==null)
		echo json_encode(['ok'=>0]) ;
	else{
		session_start();
		$_SESSION["uid"]=$row[0];
		echo json_encode(['ok'=>1,'phone'=>$row[1]]);
	}