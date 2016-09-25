
// getStyle 封装函数，获取对象的样式值
// 参数：
//    oBox    获取对象
//    attr    获取的样式属性
// 返回值： 对应样式的值
function getStyle(oBox, attr) {
	if (window.getComputedStyle) {
		return getComputedStyle(oBox)[attr];
	} else {
		// IE 
		return oBox.currentStyle[attr];
	}
}


//     封装 startMove 函数，移动  oBox
// 参数：
//    oBox:  	移动的物体，节点对象
//    attr:     需要修改物体的哪个属性: 支持 top, left, width
//    iTarget:  移动到的具体位置 （变量名以 i开头说明是整数）
//    fn:       回调函数，当动画完成后，自动通知调用者

function startMove(oBox, attr, iTarget, fn) {
	
	
	// 清除之前的定时器
	clearInterval(oBox.timer);
	
	// 创建定时器
	oBox.timer = setInterval(function() {
		// 1、 当前位置
		current = parseFloat(getStyle(oBox, attr));
		if (attr == "opacity") {
			current = current * 100; // 百分比
		}
		current = Math.round(current);
		
		
		// 2、计算速度
		var speed = (iTarget - current) / 7;	
		speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
		
		//console.log(speed, current, iTarget);
		
		// 3、判断是否到达终点
		if (current == iTarget) {
			// 停止移动
			clearInterval(oBox.timer);
			
			fn && fn(); // 如果回调函数存在并调用
			
			return ; // 立刻返回
		}
		
		// 4、更新位置
		if (attr == "opacity") {
			oBox.style.opacity = (current + speed) / 100;  // 百分比 -> opacity
			oBox.style.filter = "alpha(opacity="+(current+speed)+")";
		} else {
			oBox.style[attr] = current + speed + "px";
		}
		
		
	}, 30);
}

// 【练习2】 将 封装好的函数，单独提取到一个js文件中
