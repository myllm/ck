<?php
require_once("../init.php");
@$limit=$_REQUEST["limit"];
@$cday=$_REQUEST["cday"];
@$page=$_REQUEST["$page"];

if($cday=="all"){
    $wcday='1';
}else if($cday=="360"){
    $wcday="cday>185 and cday<=360";
}else if($cday=="35"){
    $wcday="cday<=35";
}else if($cday=="185"){
    $wcday="cday>=80 and cday<=185";
}
if($page==""||null){
	$page=10;
}
$sql="select count(cid) from ck_creditor where $wcday";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
$pageSize=($limit-1)*$page;
$pageMaxSize=ceil($row[0]/$page);
$sql="select `cid`, `cname`,`crat`, `cday`, `cmoney`, `rcnt`, `ncnt` from ck_creditor where $wcday limit $pageSize,$page ";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
$res=["limit"=>$limit,"count"=>$pageMaxSize,"rows"=>$rows];
echo json_encode($res);
