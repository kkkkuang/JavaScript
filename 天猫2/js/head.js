$(function(){
	$('.myTaobao').hover(function(){
		$('.myTaobaoInfo').show()
	},function(){
		$('.myTaobaoInfo').hide()
	});
	$('.mycollect').hover(function(){
		$('.mycollectInfo').show()
	},function(){
		$('.mycollectInfo').hide()
	});
	$('.mycode').hover(function(){
		$('.code').show()
	},function(){
		$('.code').hide()
	});
	$('.myNav').hover(function(){
		$('.webNav').show()
	},function(){
		$('.webNav').hide()
	});
	$('.shopClass li').hover(function(){
		$(this).find('.mainShopClass').show();
		$(this).addClass('active1').siblings().removeClass('active1')
	},function(){
			$(this).find('.mainShopClass').hide();
			$('.shopClass li').removeClass('active1')
	})
	//banner轮播图
	var i=0;
	function move(){
		i++;
		if(i>5){
			i=0;
			$('.banner_1 img:eq(0)').animate({
				'opacity':'1',
			},1000).css('z-index',1).siblings('img').animate({'opacity':'0'}).css('z-index',0);
		}
		$('.banner_1 img:eq('+i+')').animate({
				'opacity':'1',
			},1000).css('z-index','1').siblings('img').css('z-index',0);
			
		if(i==5){
			showButton(0);
		}
		showButton(i);	
	}
	function showButton(num){
		$('.banButton span:eq('+num+')').addClass('banner_bg').siblings().removeClass('banner_bg');
	}
	var timer=setInterval(function(){
		move();
	},3000);
	$('.banButton span').click(function(){
		i=$(this).index();
		$('.banner_1 img:eq('+i+')').animate({
				'opacity':'1',
			},1000).css('z-index','1').siblings('img').css('z-index',0);
		showButton(i);
	})
	$('.banButton').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){
			move();
		},3000);
	})
	
	//导航栏动画
	$('.nav>ul>li').mouseover(function(){
		$(this).children('ul').find('img').stop().animate({
			height:'10px'
		},200);
		$(this).siblings().children('ul').find('img').stop().animate({
			height:0
		},10);
	})
	$('.nav>ul>li').mouseout(function(){
		$(this).children('ul').find('img').stop().animate({
			height:0
		},10);
	})
	
	
	//content动画
	$('.smalllunbo1').hover(function(){
		$('.smalllunboLeft').show();
		$('.smalllunboLeft').click(function(){
			$('.smalllunbo').stop().animate({
				left:"-488px"
			},400,function(){
				$('.smalllunboLeft').hide();
				$('.smalllunboRight').show();
				$('.smalllunboRight').click(function(){
				$('.smalllunbo').stop().animate({
					left:"0"
				},400,function(){
					$('.smalllunboLeft').show();
					$('.smalllunboRight').hide();
					})
				})
			})
		})
		
	},function(){
		$('.smalllunboLeft').hide();
		$('.smalllunboRight').hide();
	})
	
	$('.content_pinpai_right>div').mouseover(function(){
		$(this).find('.content_hover').show().end().siblings().find('.content_hover').hide();
	})
	$('.content_pinpai_right').mouseout(function(){
		$('.content_hover').hide();
	})
	
	
		//左侧边栏hover 事件
	$('.bannerLi').mouseover(function(){
			var i=$(this).index();
			console.log(i);
			if(i==1){
				$(this).css('background','#f7a945');
				$(this).siblings('.bannerLi').css('background','#626262');
			}else if(i==2){
				$(this).css('background','#19c8a9');
				$(this).siblings('.bannerLi').css('background','#626262');
			}else if(i==3){
				$(this).css('background','#f15453');
				$(this).siblings('.bannerLi').css('background','#626262');
			}else if(i==4){
				$(this).css('background','#64c333');
				$(this).siblings('.bannerLi').css('background','#626262');
			}else if(i==5){
				$(this).css('background','#0aa6e8');
				$(this).siblings('.bannerLi').css('background','#626262');
			}else if(i==6){
				$(this).css('background','#ea5f8d');
				$(this).siblings('.bannerLi').css('background','#626262');
			}else if(i==7){
				$(this).css('background','#dd2727');
				$(this).siblings('.bannerLi').css('background','#626262');
			}else if(i==8){
				$(this).css('background','#dd2727');
				$('.leftBanner li:nth-child(9)').siblings('.bannerLi').css('background','#626262');
			}
			
		})
	
	//鼠标悬浮图片放大
	$('.fontStyle1,.fontStyle2').hover(function(){
		$(this).find('img').stop().animate({
			'width':'150px',
			'height':'150px'
		},300);
	},function(){
		$(this).find('img').stop().animate({
			'width':'130px',
			'height':'130px'
		},300);
	})
	
	//鼠标悬浮图片左移
	$('.sonMiddle img,.sonRight img').hover(function(){
		$(this).stop().animate({
			'marginRight':'10px'
		},200)
	},function(){
		$(this).stop().animate({
			'marginRight':'0'
		},200)
	})
	
	//侧边栏回到顶部
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		//控制右下方回到顶部按钮
		if(top>0){
			$('.img10').show();
		}else{
			$('.img10').hide();
		}
		//控制顶部搜索框
		if(top>=700){
			$('.fixedHead').slideDown(300);
		}else{
			$('.fixedHead').slideUp(300);
		}
		
		//控制左下方导航栏
		if(top>650){
			$('.leftBanner').show(400);
		}else{
			$('.leftBanner').hide(400);
		}
		
		//页面向下滑动时，相应的楼层的背景颜色的改变
		if(top>1880&&top<2200){
			$('.leftBanner li:nth-child(2)').css('background','#f7a945');
			$('.leftBanner li:nth-child(2)').siblings('.bannerLi').css('background','#626262');
		}else if(top>2200&&top<2800){
			$('.leftBanner li:nth-child(3)').css('background','#19c8a9');
			$('.leftBanner li:nth-child(3)').siblings('.bannerLi').css('background','#626262');
		}else if(top>2800&&top<3200){
			$('.leftBanner li:nth-child(4)').css('background','#f15453');
			$('.leftBanner li:nth-child(4)').siblings('.bannerLi').css('background','#626262');
		}else if(top>3200&&top<3750){
			$('.leftBanner li:nth-child(5)').css('background','#64c333');
			$('.leftBanner li:nth-child(5)').siblings('.bannerLi').css('background','#626262');
		}else if(top>3750&&top<4300){
			$('.leftBanner li:nth-child(6)').css('background','#0aa6e8');
			$('.leftBanner li:nth-child(6)').siblings('.bannerLi').css('background','#626262');
		}else if(top>4300&&top<4950){
			$('.leftBanner li:nth-child(7)').css('background','#ea5f8d');
			$('.leftBanner li:nth-child(7)').siblings('.bannerLi').css('background','#626262');
		}else if(top>4950&&top<5690){
			$('.leftBanner li:nth-child(8)').css('background','#dd2727');
			$('.leftBanner li:nth-child(8)').siblings('.bannerLi').css('background','#626262');
		}else if(top>5690){
			$('.leftBanner li:nth-child(9)').css('background','#dd2727');
			$('.leftBanner li:nth-child(9)').siblings('.bannerLi').css('background','#626262');
		}
		
		
	})
	//楼层点击使得窗口回到对应楼层页面
	$('.leftBanner li').click(function(){
			var i=$(this).index();
			if(i==1){
				$('body,html').stop().animate({'scrollTop':'1955'},300);
			}else if(i==2){
				$('body,html').stop().animate({'scrollTop':'2455'},300);
			}else if(i==3){
				$('body,html').stop().animate({'scrollTop':'3055'},300);
			}else if(i==4){
				$('body,html').stop().animate({'scrollTop':'3555'},300);
			}else if(i==5){
				$('body,html').stop().animate({'scrollTop':'4155'},300);
			}else if(i==6){
				$('body,html').stop().animate({'scrollTop':'4655'},300);
			}else if(i==7){
				$('body,html').stop().animate({'scrollTop':'5255'},300);
			}else if(i==8){
				$('body,html').stop().animate({'scrollTop':'6115'},300);
			}else if(i==9){
				$('body,html').stop().animate({'scrollTop':'0'},100);
			}
			
		})
	
	
	//右下方按钮点击事件
	$('.img10').click(function(){
			$('body').animate({
				'scrollTop':0,
			},100);
	})
	
	//控制登录登出，因为a标签的自动跳转，登录后遮盖住注册的a标签
	var cook=$.cookie('user');
	if(cook){
		$('.p_login').text('你好！ '+cook);
		$('.p_login').attr('href','javascript:void(0);');
		$('.p_click').show();
		$('.headerInfo').css('margin-left','210px');
		$('.p_click').click(function(event){
			$('.p_login').text('请登录');
			$('.p_login').attr('href','login.html');
			$(this).hide();
			$('.headerInfo').css('margin-left','270px');
		})	
	}
	
	
})
