<?php
require_once("../init.php");
@$tab_id=$_REQUEST["tab_id"];
$sql="select iid,sm,md,lg,img_msg,img_href from ck_imgs where tab_id=$tab_id";
$result=mysqli_query($conn,$sql);
$res=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($res);