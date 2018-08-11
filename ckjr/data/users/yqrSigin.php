<?php
require_once("../init.php");
$yqr=$_REQUEST["yqr"];
$reg="/^[\x{4e00}-\x{9fa5}]{2,5}$/u";
$re=preg_match($reg,$yqr);
if(!$re){
    die("0");
}
$sql="select yqr_name from ck_yqr where yqr_name='$yqr'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
if($row==null){
    echo 0;
}else{
    echo 1;
}