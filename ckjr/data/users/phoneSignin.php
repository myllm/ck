<?php
require_once("../init.php");
$phone=$_REQUEST["phone"];
$reg="/^((0086)|(\+86))?(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/";
$re=preg_match($reg,$phone);
if(!$re){
    die("0");
}
$sql="select phone from ck_user where phone='$phone'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
if($row==null){
    echo 0;
}else{
    echo 1;
}