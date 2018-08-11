<?php
require_once("../init.php");
$sql="SELECT `oid`, `oname`, `omsg` FROM `ck_msgorg` WHERE 1 ";
$result=mysqli_query($conn,$sql);
$res=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($res);