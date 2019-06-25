;
(function($) {
	var $telbstop = false; //手机号输入正确标识
	$('.box1 #phone').blur(function() {
		var telreg = /^1[3578][0-9]{9}$/;
		if ($('#phone').val() != '') {
			if (telreg.test($('#phone').val())) {
				$.ajax({
						url: 'http://localhost/taobao_mall/php/register.php',
						type: 'POST',
						data: {
							tel: $('#phone').val()
						},
					})
					.done(function(data) {
						var $data = $.parseJSON(data);
						//console.log($data);
						if (!$data['tel']) {
							$('.box1 .tips .correct').show(0).siblings('.wrong').hide(0).siblings('span').hide(0);
							$telbstop = true;
							tonext();
						} else {
							$('.box1 .tips .correct').hide(0).siblings('.wrong').show(0).siblings('span').show(0).html('手机号已存在');
							$telbstop = false;
							tonext();
						}
					})
					.fail(function() {
						console.log("error");
					})
					.always(function() {
						console.log("complete");
					});
			} else {
				$('.box1 .tips .correct').hide(0).siblings('.wrong').show(0).siblings('span').show(0).html('格式不正确');
				$telbstop = false;
				tonext();
			}
		} else {
			$('.box1 .tips .correct').hide(0).siblings('.wrong').show(0).siblings('span').show(0).html('手机号不能为空');
			$telbstop = false;
			tonext();
		}
	});

	function tonext() {
		if ($telbstop) {
			$('.next-step').css({
				cursor: 'pointer',
				background: '#ff4001',
				color: '#FFF',
				'pointer-events': 'auto' //使div变得可以绑定点击事件
			});
			$('.next-step').click(function(event) {
				$('.box1').hide(0).siblings('.box2').show(0);
				$('.box2 .loginp').html($('#phone').val());
				$('.step li').eq(1).addClass('stepavtive');
			});
		} else {
			$('.next-step').css({
				color: '#999',
				cursor: 'not-allowed',
				background: '#ededed',
				'pointer-events': 'none' //使div变得不可点击
			});
		}
	}
	//密码输入标识
	var $passbstop = false;

	function strength() {
		var regnum = /\d+/g;
		var regcharset = /[a-zA-Z]+/g;
		var regother = /[\W\-]+/g;
		var result = 0;
		if ($('#password').val().length >= 6 && $('#password').val().length <= 20) {
			$('.pw-rule i').eq(0).removeClass('pw-icon-normal pw-icon-error').addClass('pw-icon-ok').html('㑇');
			$('.pw-rule i').eq(1).removeClass('pw-icon-normal pw-icon-error').addClass('pw-icon-ok').html('㑇');
			if (regnum.test($('#password').val())) {
				result++;
			}
			if (regcharset.test($('#password').val())) {
				result++;
			}
			if (regother.test($('#password').val())) {
				result++;
			}
			switch (result) {
				case 1:
					$('.pw-rule i').eq(2).removeClass('pw-icon-normal pw-icon-ok').addClass('pw-icon-error').html('㐲');
					$('.strengthBox span').eq(0).css('background', 'red').siblings('span').css('background', '#dcdcdc');
					$passbstop = false;
					break;
				case 2:
					$('.pw-rule i').eq(2).removeClass('pw-icon-normal pw-icon-error').addClass('pw-icon-ok').html('㑇');
					$('.strengthBox span').eq(1).css('background', 'orange').siblings('span').css('background', '#dcdcdc');
					$passbstop = true;
					break;
				case 3:
					$('.pw-rule i').eq(2).removeClass('pw-icon-normal pw-icon-error').addClass('pw-icon-ok').html('㑇');
					$('.strengthBox span').eq(2).css('background', 'green').siblings('span').css('background', '#dcdcdc');
					$passbstop = true;
					break;
			}
		} else {
			$('.pw-rule i').eq(0).removeClass('pw-icon-normal pw-icon-ok').addClass('pw-icon-error').html('㐲');
			$passbstop = false;
		}

	};
	$('#password').focus(function(event) {
		$('.pwtip').show(0);
		if ($('#password').val() != '') {
			strength();
		} else {
			$('.pw-rule i').removeClass('pw-icon-ok pw-icon-error').addClass('pw-icon-normal').html('');
		};
		$('#password').on('input', function(event) {
			strength();
			event.preventDefault();
			/* Act on the event */
		});
		//㐲X|㑇√|normal
	});
	$('#password').blur(function() {
		$('.pwtip').hide(0);
		if ($('.pw-rule-length i').html() == '㑇' && $('.pw-rule-legal i').html() == '㑇' && $('.pw-rule-multi i').html() == '㑇') {
			$('.passwordbox .wrong').hide(0).siblings('.correct').show(0).siblings('span').hide(0);
		} else {
			$('.passwordbox .correct').hide(0).siblings('.wrong').show(0).siblings('span').show(0);
		}
	});


	//密码重复输入标识
	var $doublepass = false;
	$('#passwordagain').focus(function() {
		$('.passwordbox2 .gantan').show(0).siblings('i').hide(0).siblings('span').hide(0);
	});
	$('#passwordagain').blur(function() {
		if ($('#passwordagain').val() == $('#password').val()) {
			$('.passwordbox2 .correct').show(0).siblings('i').hide(0).siblings('span').hide(0);
			$doublepass = true;
		} else {
			$('.passwordbox2 .wrong').show(0).siblings('i').hide(0).siblings('span').show(0);
		}
	});

	//用户名辨识
	var $namebstop = false; //用户名输入正确标识
	$('.box2 #username').focus(function() {
		$('.namereg .gantan').show(0).siblings('i').hide(0).siblings('span').show(0);
	});
	$('.box2 #username').blur(function() {
		var namereg = /[\w\u4e00-\u9fa5]{5,25}/;
		if ($('#username').val() != '') {
			if (namereg.test($('#username').val())) {
				$.ajax({
						url: 'http://localhost/taobao_mall/php/register.php',
						type: 'POST',
						data: {
							username: $('#username').val()
						},
					})
					.done(function(data) {
						var $data = $.parseJSON(data);
						//console.log($data);
						if (!$data['username']) {
							$('.namereg .correct').show(0).siblings('i').hide(0).siblings('span').hide(0);
							$namebstop = true;
						} else {
							$('.namereg .wrong').show(0).siblings('i').hide(0).siblings('span').show(0).html('用户名已存在');
							$namebstop = false;
						}
					})
					.fail(function() {
						console.log("error");
					})
					.always(function() {
						console.log("complete");
					});
			} else {
				$('.namereg .wrong').show(0).siblings('i').hide(0).siblings('span').show(0).html('用户名格式不正确');
				$namebstop = false;
			}
		} else {
			$('.namereg .wrong').show(0).siblings('i').hide(0).siblings('span').show(0).html('用户名不能为空');
			$namebstop = false;
		}
	});



	$('form').on('submit', function() {
		if (!($telbstop && $passbstop && $doublepass && $namebstop)) {
			return false; //阻止按钮跳转。
		}
	});

})(jQuery)