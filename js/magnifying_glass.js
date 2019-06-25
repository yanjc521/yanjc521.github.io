$(function(){
	var $sPic=$('#small');//小图
	var $bBox=$('#big');//大框
	var $mask=$('#mask');//遮罩
	var $bPic=$('#bigimg');//大图
	var $aLiBtn=$('.wrap ul li');//小图标
	var $btnleft=$('#btnleft');
	var $btnright=$('#btnright');
	var $num=0;
	function tab(){
		$aLiBtn.eq($num).addClass('selected').siblings('li').removeClass('selected');
		$('#small img').attr({
			src: '../img/fang-small-'+$num+'.jpg',
		});
		$('#big img').attr({
			src: '../img/fang-big-'+$num+'.jpg',
		});
		//改变图片来源

		if($num>4 && $('.wrap ul').position().left==10){
			$('.wrap ul').css({
				left:$('.wrap ul').position().left-78,
			})
		}//如果在最右一位，滚动整条
		if($num<1 && $('.wrap ul').position().left==-68){
			$('.wrap ul').css({
				left:$('.wrap ul').position().left+78,
			})
		}//如果在最左一位，滚动整条
	}

	$aLiBtn.on('click', function() {
		$num=$(this).index();
		tab();
		event.preventDefault();
	});//单击小图标切换图片

	$btnleft.on('click',function(){
		if ($num==0) {return false;}
		else{
			$num--;
			tab();
		}
	});//单击左键切换
	$btnright.on('click',function(){
		if ($num==($aLiBtn.length-1)) {return false;}
		else{
			$num++;
			tab();
		}
	});//单击右键切换

	$sPic.hover(function(ev) {
		$mask.css({
			'visibility':'visible',
			'width':$sPic.width()*$bBox.width()/$bPic.width(),
			'height':$sPic.height()*$bBox.height()/$bPic.height(),
		});//显示放大镜
		$scale=$bBox.width()/$mask.width();//计算比例（大框/小框）
		$sPic.mousemove(function(event) {
			//移动放大镜
			var $left=event.pageX-$sPic.offset().left-$mask.width()/2;
			var $top=event.pageY-$sPic.offset().top-$mask.width()/2;
			//console.log($left,$top);
			//限制放大镜位置
			if($left<0){
				$left=0;
			}else if($left>=($sPic.width()-$mask.width())){
				$left=$sPic.width()-$mask.width();
			}
			if($top<0){
				$top=0;
			}else if($top>=($sPic.height()-$mask.height())){
				$top=$sPic.height()-$mask.height();
			}
			$mask.css({
				'left':$left,
				'top':$top,
			})
			//大图位置
			$bPic.css({
				left:-$left*$scale,
				top:-$top*$scale,
			})
		});
		$bPic.css('visibility','visible');
	}, function() {
		$mask.css('visibility','hidden');
		$bPic.css('visibility','hidden');//隐藏放大镜和大图
	});
})

$(function(){
	$('.buy').on('click', function(event) {
		var offset=$('.cart').offset();
		var flyer=$('.buy');
		flyer.fly({
			start: {
		        left: event.pageX,
		        top: event.pageY
		    },
		    end: {
		        left: offset.left,
		        top: 150,
		    }
		})
		event.preventDefault();
	});
})