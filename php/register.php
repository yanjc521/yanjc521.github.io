<?php  
	require 'conc.php';//引入数据库连接的文件。

	error_reporting(0);

	//失去焦点时获取
	

	if(isset($_POST['tel']) || $_POST['submit'] || $_POST['username']){
		$user=@$_POST['tel'];
		$username=@$_POST['username'];
	}else{
		exit('非法操作');
	}

	$had;
	$query1="select * from user where tel='$user'";//查询手机号是否存在于表中。
	$result=mysql_query($query1);//获取结果集
	if(mysql_fetch_array($result)){
		$had=true;//有重复 1
	}else{
		$had=false;//没有重复（kong）
	}


	$had2;
	$query2="select * from user where username='$username'";//查询用户名是否存在于表中。
	$result2=mysql_query($query2);//获取结果集
	if(mysql_fetch_array($result2)){
		$had2=true;//有重复 1
	}else{
		$had2=false;//没有重复（kong）
	}

	class RegClass{

	};
	$Reg1=new RegClass();
	$Reg1->tel=$had;
	$Reg1->username=$had2;
	echo json_encode($Reg1);


	//submit提交的时候才能获取
	//点击了注册按钮
	if(isset($_POST['submit'])){
		$name=$_POST['username'];//表单的名称
		$pass=$_POST['password'];//表单的名称
		$tel=$_POST['tel'];//表单的名称
		$query="insert user value(null,'$tel','$name','$pass')";
		mysql_query($query);
		//header('location:login.html');
		header('location:http://localhost/taobao_mall/html/login.html');
	}
	
?>