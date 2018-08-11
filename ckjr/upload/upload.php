<?php
$size=$_FILES["mypic"]["size"]/1000;
if($size>512){
    die("1");
}
$type=$_FILES["mypic"]["type"];
$rs=strripos($type,"image");
if($rs===false){
    die("2");
}
$ext=strstr($_FILES["mypic"]["name"],".");
$fileName="uploads/".time().rand(1,9999).$ext;
move_uploaded_file(
$_FILES["mypic"]["tmp_name"],$fileName);
echo "上传成功";