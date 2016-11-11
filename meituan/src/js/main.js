 //设置swiper插件
 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
});


//设置倒计时
var date = new Date();  //获取当前时间
var d = date.getTime();  //获取当前时间的毫秒数
//console.log(d);

var t=date.getFullYear()+'/'+(date.getMonth()+1)+
	'/'+(date.getDate()+1);
var nextDay = new Date(t+' 00:00:00'); //获取第二天凌晨时间

var nextDaySeconds = nextDay.getTime();

setInterval(function(){
	var date = new Date();
	var d = date.getTime();
	var hours = parseInt(((nextDaySeconds-d)/1000/60/60));
	var min = parseInt(((nextDaySeconds-d)/1000/60)%60);
	var sec = parseInt(((nextDaySeconds-d)/1000)%60);
	if(hours<10){
		hours = "0"+hours;
	}
	if(min<10){
		min = "0"+min;
	}
	if(sec<10){
		sec = "0"+sec;
	}
	$('.daogou4 li:eq(0)').text(hours);
	$('.daogou4 li:eq(1)').text(min);
	$('.daogou4 li:eq(2)').text(sec);
},1000)

var index = 0;
$(window).on('scroll',function(){
	var scrollTop = $(window).scrollTop();
	//文档高度
	var docHeight = $(document).height();
	//窗口高度
	var winHeight = $(window).height();
//	console.log(scrollTop)
//	console.log(docHeight - winHeight);
	if(scrollTop >= docHeight - winHeight){
		
		index++;
		console.log(index);
		 if(index<=5){
		 	$('.loading').show();
			ajax();
		 }else{
		 	$('.loading').hide();
		 	return;
		 }
		
	}
	if(scrollTop>=400){
		$('.backTop').show();
	}else{
		$('.backTop').hide();
	}
	$('.backTop').on('click',function(){
		$(window).scrollTop('0px');
	})
	
	
})
function ajax(){
	if(index == 1){
		var i = index;
	}else{
		var i = index*15;
	}
	$.ajax({
		type:"get",
		url:"http://diviner.jd.com/diviner?p=610009&uuid=12396477&lid=1&lim=15&cb=tempGuessLikeCallback",
		async:true,
		dataType:'jsonp',
		scriptCharset:'gb2312',
		jsonp: 'callback',
		jsonpCallback:'tempGuessLikeCallback',
		success:function(res){
			var data = res.data;
			$.each(data, function(idx,obj) {
				var li = $('<li/>');
				var ul = $('.yourLike ul');
				var a = $('<a/>')
				var div0 = $('<div/>')
				var div =$('<div/>').addClass('like_left')
				var img = $('<img />').attr('src',"http://img13.360buyimg.com/n1/s200x200_"+obj.img);
				var div2 = $('<div/>').addClass('like_right');
				
				var div3 = $('<div/>').addClass('shopName');
				if(obj.t.length>=18){
					var tittle = obj.t.substr(0,18)+"...";
				}else{
					var tittle = obj.t;
				}
				div3.text(tittle);
//				div3.text(obj.t);
				var div4 = $('<div/>').addClass('info');
				
				div4.text('我是狗东');
				
				var div5 = $('<div/>').addClass('price');
				
				var span = $('<span/>');
				span.text(obj.jp+"元");
				var i = $('<i/>')
				i.text('新用户1元抢');
				
				var em = $('<em/>');
				em.text('库存'+obj.c3);
				
				div5.append(span);
				div5.append(i);
				div5.append(em);
				
				div2.append(div3);
				div2.append(div4);
				div2.append(div5);
				div.append(img);
				
				div0.append(div);
				div0.append(div2);
				
				a.append(div0);
				li.append(a);
				ul.append(li);
			});
			
		}
	});
}









