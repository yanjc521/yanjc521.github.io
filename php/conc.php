<?php
header('content-type:text/html;charset="utf-8"');
@$conn=mysql_connect('localhost','root','12345678');
mysql_select_db('taobao');
mysql_query('SET NAMES UTF8');
error_reporting(0);
?>