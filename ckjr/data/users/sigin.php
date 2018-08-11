<?php
require_once("../init.php");
$phone=$_REQUEST["phone"];
$upwd=$_REQUEST["upwd"];
$reg="/^((0086)|(\+86))?(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/";
$re=preg_match($reg,$phone);
if(!$re){
    die("0");
}
$reg="/^.*(?=[\w!@#$%^&*?\(\),]{8,16})(?=.*\d+)(?=.*[A-Z]*)(?=.*[a-z]+).*$/";
$re=preg_match($reg,$upwd);
if(!$re){
    die("0");
}
$upwd=md5($upwd);
$sql="INSERT INTO `ck_user`(`upwd`, `phone`) VALUES ('$upwd','$phone')";
$result=mysqli_query($conn,$sql);
$res=mysqli_affected_rows($conn);
if($res==0){
    echo 0;
}else{
    echo 1;
}