<?php
header('content-type:text/html;charset="utf-8"');
@$conn=mysql_connect('localhost','root','12345678');
mysql_select_db('taobao');
mysql_query('SET NAMES UTF8');
error_reporting(0);
//topmap
$topmap=mysql_query('select * from topmap');
$array0;
$j=0;
for($i=0;$i<mysql_num_rows($topmap);$i++){
	$array0[$j++]=mysql_fetch_array($topmap,MYSQL_ASSOC);
}
//nav
$nav=mysql_query('select * from nav');
$array1;
$j=0;
for($i=0;$i<mysql_num_rows($nav);$i++){
	$array1[$j++]=mysql_fetch_array($nav,MYSQL_ASSOC);
}

//所有图片
$dongdamen=mysql_query('select * from dongdamen');
$array2;
$j=0;
for($i=0;$i<mysql_num_rows($dongdamen);$i++){
	$array2[$j++]=mysql_fetch_array($dongdamen,MYSQL_ASSOC);
}
//猜你喜欢
$cailike=mysql_query('select * from cailike');
$array3;
$j=0;
for($i=0;$i<mysql_num_rows($cailike);$i++){
	$array3[$j++]=mysql_fetch_array($cailike,MYSQL_ASSOC);
}



class DataClass{//创建一个类

};

$DaTa1=new DataClass();//实例化对象


$DaTa1->topmap=$array0;//添加属性
$DaTa1->nav=$array1;
$DaTa1->dongdamen=$array2;
$DaTa1->cailike=$array3;
echo json_encode($DaTa1);
?>