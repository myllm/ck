<?php
require_once("../init.php");
@$fid=$_REQUEST["fid"];
@$pday=$_REQUEST["pday"];
if($fid=="all"){
    $wfid='1';
}else{
    $wfid="fid=$fid";
}
if($pday=="all"){
    $wpday='1';
}if($pday=="360"){
    $wpday="pday=360";
}else if($pday=="35"){
    $wpday="pday<=35";
}else if($pday=="185"){
    $wpday="pday>=80 and pday<=185";
}
$sql="SELECT `pid`, `fid`, `pname`, `active`, `amethod`, `rmethod`, `itla`, `rat`, `rcpt`, `pday`, `pcnt`, `ncnt` FROM `ck_project` WHERE $wfid and $wpday ";
$result=mysqli_query($conn,$sql);
$res=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($res);
