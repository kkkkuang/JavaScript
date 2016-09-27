/*function getStyle(oBox, attr) {
	if (window.getComputedStyle) {
		return getComputedStyle(oBox)[attr];
	} else {
		// IE 
		return oBox.currentStyle[attr];
	}
}
function startMove(oBox,attr,iTarget,fn){
	clearInterval(oBox.timer);
	oBox.timer=setInterval(function(){
		var current=parseFloat(getStyle(oBox,attr));
		if (attr == "opacity") {
			current = current * 100; // 百分比
		}
		current = Math.round(current);
		var speed=(iTarget-current)/7;
		speed=(speed>0)? Math.ceil(speed):Math.floor(speed);
		if(current==iTarget){
				clearInterval(oBox.timer);
				fn&&fn();
				return;
			}
		if(attr=="opacity"){
			oBox.style.opacity=(current+speed)/100;
			oBox.style.filter="alpha(opatity="+(current+speed)+")";
		}else{
			oBox.style[attr]=current+speed+"px";
		}
	},100)
}*/
function getStyle(oBox,attr){
	if(window.getComputedStyle){
		return getComputedStyle(oBox)[attr];
	}else{
		return oBox.currentStyle[attr];
	}
}
function startMove(oBox,oAttr,fn){
			clearInterval(oBox.timer)
			oBox.timer=setInterval(function(){
				var flag=false;
				for(var attr in oAttr){
				current=parseFloat(getStyle(oBox,attr));
				if(attr=="opacity"){
					current=current*100;
				}
				var iTarget=oAttr[attr];
				current=Math.round(current);
				var speed=(iTarget-current)/7;
				speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
				if(current!=iTarget){
					flag=true;
				}else{
					continue;
				}
				if(attr=="opacity"){
					oBox.style.opacity=(current+speed)/100;
					oBox.style.filter="alpha(opacity="+(current+speed)+")";
				}else{
					oBox.style[attr]=current+speed+"px";
				}
				
			}
				if (flag == false) {
					clearInterval(oBox.timer);
					fn && fn(); // 调用回调函数
				}
		},30)
	
	
}
