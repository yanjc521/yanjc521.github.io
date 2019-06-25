;(function($){
    var $banner2 = $('.main-banner2');
    var $piclist2 = $('.main-banner2 ul');
    var $piclistli2 = $('.main-banner2 ul li');
    var $btnlist2 = $('.main-banner2 ol');
    var $btnlistli2 = $('.main-banner2 ol li'); //小圆圈
    var $picwidth2 = $piclistli2.eq(0).width();
    $piclist2.append($piclistli2.first().clone(true));
    $piclist2.prepend($piclistli2.last().clone(true));
    var $piclength2 = $('.main-banner2 ul li').length;
    var $btnlength2 = $('.main-banner2 ol li').length;
    var $num2 = 0;
    var timer2 = null;
    //图片ul宽度

    $piclist2.width($piclength2 * $picwidth2).css('left', -$picwidth2);

    $btnlistli2.on('click', function() {
        $num2 = $(this).index(); //当前点击的按钮的索引。
        tab2();

    });


    function tab2() {
        //给当前点击的按钮添加active，其他的兄弟按钮移除active
        $btnlistli2.eq($num2).addClass('banner2-btn-active').siblings('li').removeClass('banner2-btn-active');
        //$num+1：布局图片列表移出一张图片。索引+1
        $piclist2.stop(true, true).animate({
            left: -$picwidth2 * ($num2 + 1)
        }, 200, function() { //运动回调
            //判断右边按钮事件：最后一张(第一张)的时候，利用css恢复初始布局
            if (parseInt($piclist2.css('left')) == -$picwidth2 * ($btnlength2 + 1)) {
                $piclist2.css('left', -$picwidth2);
                $num2 = 0;
            }
            if (parseInt($piclist2.css('left')) == 0) {
                $piclist2.css('left', -$picwidth2 * $btnlength2); //图片的宽度×按钮的长度
                $num2 = $btnlength2 - 1;
            }
        });
    }


    //左边按钮添加事件
    $('.banner2-left').on('click', function() {
            $num2--; //索引累减
            tab2();
        })
        //右边按钮添加事件
    $('.banner2-right').on('click', function() {
        $num2++; //索引累加
        tab2();
        if ($num2 == $btnlength2) { //$num==小圆圈的长度的时，切换active
            $btnlistli2.eq(0).addClass('banner2-btn-active').siblings('li').removeClass('banner2-btn-active');
        }

    });
    timer2 = setInterval(function() {
        $('.banner2-right').click();//每隔3秒一次让右边箭头触发
    }, 3000);

    $banner2.hover(function() {
        clearInterval(timer2);
    }, function() {
        timer2 = setInterval(function() {
            $('.banner2-right').click();//每隔3秒一次让右边箭头触发
        }, 2300);
    });



    /*banner2*/
    var $banner = $('.main-banner1');
    var $piclist = $('.main-banner1 ul');
    var $piclistli = $('.main-banner1 ul li');
    var $btnlist = $('.main-banner1 ol');
    var $btnlistli = $('.main-banner1 ol li'); //小圆圈
    var $picwidth = $piclistli.eq(0).width();
    $piclist.append($piclistli.first().clone(true));
    $piclist.prepend($piclistli.last().clone(true));
    var $piclength = $('.main-banner1 ul li').length;
    var $btnlength = $('.main-banner1 ol li').length;
    var $num = 0;
    var timer = null;
    //图片ul宽度

    $piclist.width($piclength * $picwidth).css('left', -$picwidth);

    $btnlistli.on('click', function() {
        $num = $(this).index(); //当前点击的按钮的索引。
        tab();

    });


    function tab() {
        //给当前点击的按钮添加active，其他的兄弟按钮移除active
        $btnlistli.eq($num).addClass('banner1-btn-active').siblings('li').removeClass('banner1-btn-active');
        //$num+1：布局图片列表移出一张图片。索引+1
        $piclist.stop(true, true).animate({
            left: -$picwidth * ($num + 1)
        }, 200, function() { //运动回调
            //判断右边按钮事件：最后一张(第一张)的时候，利用css恢复初始布局
            if (parseInt($piclist.css('left')) == -$picwidth * ($btnlength + 1)) {
                $piclist.css('left', -$picwidth);
                $num = 0;
            }

            if (parseInt($piclist.css('left')) == 0) {
                $piclist.css('left', -$picwidth * $btnlength); //图片的宽度×按钮的长度
                $num = $btnlength - 1;
            }

        });
    }


    //左边按钮添加事件
    $('.banner1-left').on('click', function() {
            $num--; //索引累减
            tab();
        })
        //右边按钮添加事件
    $('.banner1-right').on('click', function() {
        $num++; //索引累加
        tab();
        if ($num == $btnlength) { //$num==小圆圈的长度的时，切换active
            $btnlistli.eq(0).addClass('banner1-btn-active').siblings('li').removeClass('banner1-btn-active');
        }

    });
    timer = setInterval(function() {
        $('.banner1-right').click();//每隔3秒一次让右边箭头触发
    }, 3000);

    $banner.hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(function() {
            $('.banner1-right').click();//每隔3秒一次让右边箭头触发
        }, 3000);
    });
/*top search*//*楼梯效果*/
$(window).on('scroll',function(event) {
    if ($(window).scrollTop()>$('.nav1').offset().top) {
        $('.topsearch').css({
            visibility: 'visible',
        });
    }else{
        $('.topsearch').css({
            visibility: 'hidden',
        });
    };
    /* Act on the event */
    if($(window).scrollTop()>450){
        $('.stairs').css({
            position: 'fixed',
            top: 49
        });//大于原固定值则改为fixed定位
    }else{
        $('.stairs').css({
            position: 'absolute',
            top: 490
        });//滚动条小于固定值则变为绝对定位
    };
    $('img').each(function(index) {
        if (($(window).scrollTop()>$('img').offset().top)&& ($('img').eq(index).attr('src')=='img/lazyload.gif')) {
            $('img').eq(index).attr({
                src: $('img').eq(index).attr('data-original'),
            });
        }
    });

    var arrTop=[];
    for (var j = 0; j < 6; j++) {
        var str='#louti'+j;
        arrTop[j]=$(str).offset().top+400;
    };
    for (var i = 0; i < arrTop.length; i++) {
        if((arrTop[i])>$(window).scrollTop()){
            $('.stairs .bt').removeClass('on');//所有清除类。
            $('.stairs .bt').eq(i).addClass('on');
            return false;
        }
    };
});
/*楼梯点击事件*/
$('.stairs .bt').on('click', function() {
    var arrTop=[];
    for (var j = 0; j < 6; j++) {
        var str='#louti'+j;
        arrTop[j]=$(str).offset().top;
    };
    var num=$(this).index();
    $(this).addClass('on').siblings('.bt').removeClass('on');
    $('html,body').animate({ //chrome:body  ff:html
        scrollTop: arrTop[num]
    }, 400);
});
$('.fixedtool-9').on('click', function(event) {
    $('html,body').animate({
        scrollTop: 0
    }, 400);
    event.preventDefault();
    /* Act on the event */
});
/*固定搜索栏的搜索*/

$('.searchinput input').on('input', function(){
    $.ajax({
        url: 'https://suggest.taobao.com/sug?code=utf-8&q=' + $(this).val() + '&_ksTS=1487919561590_340&callback=taobao',
        type: 'GET',
        dataType:'jsonp',
    })
    .done(function(data) {
        var $d = data.result; //数组
        if ($d.length != 0) {
            $('.conc').show('fast');
            var $str = '';
            for (var i = 0; i < $d.length; i++) {
                $str += '<li><a href="https://s.taobao.com/search?q=' + $d[i][0] + '">' + $d[i][0] + '</a></li>';
            }
            $('.conc ul').html($str);
        }else{
            $('.conc').hide('fast');
        }
    })
    .fail(function() {
        console.log("error");
    });
});
/*搜索栏的跨域*/
$('.search-middle input').on('input', function(){
    $.ajax({
        url: 'https://suggest.taobao.com/sug?code=utf-8&q=' + $(this).val() + '&_ksTS=1487919561590_340&callback=taobao',
        type: 'GET',
        dataType:'jsonp',
    })
    .done(function(data) {
        var $d = data.result; //数组
        if ($d.length != 0) {
            $('.search-middle .conc').show('fast');
            var $str = '';
            for (var i = 0; i < $d.length; i++) {
                $str += '<li><a href="https://s.taobao.com/search?q=' + $d[i][0] + '">' + $d[i][0] + '</a></li>';
            }
            $('.search-middle .conc ul').html($str);
        }else{
            $('.search-middle .conc').hide('fast');
        }
    })
    .fail(function() {
        console.log("error");
    });
});
$('.search-middle input').blur(function(event) {
   $('.search-middle .conc').hide('fast');
});


/*ajax传输*/
$(window).load(function() {
    $.ajax({
        url: 'http://localhost/taobao_mall/php/connect.php',
        type: 'GET',
        async:'true',
    })
    .done(function(data) {
        var $data=$.parseJSON(data);
        $('.map-main ul li').each(function(index) {
            $(this).html('<a href="##">'+$data['topmap'][index]['name']+'</a>');
        });
        $('.nav2 ul li a').each(function(index) {
            $(this).html($data['nav'][index]['title']);
        });
        $('.usuright a').each(function(index) {
            $(this).html('<img src="img/lazyload.gif" data-original="'+$data['dongdamen'][index]['url']+'">')
        });//我常逛的
        $('.fscont a').each(function(index) {
            $(this).html('<img src="img/lazyload.gif" data-original="'+$data['dongdamen'][index+24]['url']+'"><span class="a-all">限量口红</span>')
        });//中间
        $('.chinfo a').not('.cheapbuy').each(function(index) {
            $(this).html('<img src="img/lazyload.gif" data-original="'+$data['dongdamen'][index+104]['url']+'">')
        });//实惠
        $('.goodgoodslist a span').each(function(index) {
            $(this).html('<img class="a-all" src="img/lazyload.gif" data-original="'+$data['dongdamen'][index+112]['url']+'">')
        });//pageright

        var str='';
        for (var i = 0; i < $data['cailike'].length; i++) {
            str+='<li><a href="##">'+
                    '<img src="img/lazyload.gif" data-original="'+$data['cailike'][i]['src']+'">'+
                    '<h3>'+$data['cailike'][i]['title']+'</h3>'+
                    '<p>'+$data['cailike'][i]['price']+'</p>'+
                    '<a href="##" class="ylbg">'+
                        '<p class="similar">找相似</p>'+
                    '</a>'+
               ' </a>'+
            '</li>';
        }
        $('.youlike').html(str);
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
});





})(jQuery)