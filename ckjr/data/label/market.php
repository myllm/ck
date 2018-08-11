<?php
require_once("../init.php");
@$sort=$_REQUEST["sort"];
@$sc=$_REQUEST["sc"];
$sql="select lid,cpm,days,limg,war,exc from ck_label order by $sort $sc,lid $sc";
$result=mysqli_query($conn,$sql);
$res=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($res);