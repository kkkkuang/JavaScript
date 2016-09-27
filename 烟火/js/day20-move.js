

//     封装 startMove 函数，移动  oBox
// 参数：
//    oBox:  	移动的物体，节点对象
//    oAttr:    需要修改物体的哪些属性: 支持 top, left, width
//              例如： {left: 500} 代表，修改left属性到500的位置
//              例如： {left: 500, top: 500} 代表，同时修改left、top 属性到对应的位置
//    fn:       回调函数，当动画完成后，自动通知调用者

// 判断动画是否完成的标准：
//    每一个属性 都到达了 目标位置
//      开始设置 flag 为 false, 
//      只要有一个没完成， 就将flag设为true
//   在【遍历完所有属性】后，检查一下 flag
//    如果flag为true，至少有一个属性没完成 ==> 不能终止定时器
//    如果flag为false，全部属性都完成了 ==> 动画完成，终止定时器


function startMove(oBox, oAttr, fn) {
	
	// 清除之前的定时器
	clearInterval(oBox.timer);
	
	// 创建定时器
	oBox.timer = setInterval(function() {
		
		// 标记是否完成
		// 在遍历后，flag的值还为false，说明全部都完成了
		var flag = false;
		
		// 遍历所有属性
		for (var attr in oAttr) {
			
			// 1、 当前位置
			current = parseFloat(getStyle(oBox, attr));
			if (attr == "opacity") {
				current = current * 100; // 百分比
			}
			current = Math.round(current);
			
			var iTarget = oAttr[attr]; // 目标值
			
			// 2、计算速度
			var speed = (iTarget - current) / 7;	
			speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
			
			console.log(attr, speed, current, iTarget);
			
			// 3、判断是否到达终点
			if (current != iTarget) {
				// 没有到终点 ==> 当前属性动画没有完成
				flag = true;
			} else {
				// 当前属性动画完成了，当前属性的更新动作，不需要执行了
				//  其他属性还是要更新的，所以，这里不能立刻返回
				continue;
//				return ; // continue
			}
			
			// 4、更新位置
			if (attr == "opacity") {
				oBox.style.opacity = (current + speed) / 100;  // 百分比 -> opacity
				oBox.style.filter = "alpha(opacity="+(current+speed)+")";
			} else {
				oBox.style[attr] = current + speed + "px";
			}
		}
		
		// 在遍历后，flag的值还为false，说明全部都完成了
		if (flag == false) {
			clearInterval(oBox.timer);
			
			fn && fn(); // 调用回调函数
		}
		
	}, 30);
}

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
