function transForm(data){
	var arr=[];
	for(var key in data){
		arr.push(key + "=" + data[key]);
	}
	return arr.join("&");
}
function ajax(obj){
	var req;
	if(window.XMLHttpRequest){
		req=new XMLHttpRequest();
	}else{
		req=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(obj.async==undefined){
		obj.async=true;
	}
	if(obj.method=="POST"){
		req.open(obj.method,obj.url,obj.async)
		req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		req.send(transForm(obj.data));
	}else{
		obj.url+="?";
		obj.url+=transForm(obj.data);
		req.open(obj.method,obj.url,obj.async);
		req.send();
	}
	if(obj.async==false){
		if (req.readyState == 4 ) {
			
			if (req.status == 200) {
				// 只有 obj.success 存在，才会调用
				obj.success && obj.success(req.responseText);
			} else {
				obj.fail && obj.fail(req.status);
			}
		}
	}else{
		req.onreadystatechange=function(){
		if (req.readyState == 4 ) {
			
			if (req.status == 200) {
					// 只有 obj.success 存在，才会调用
					obj.success && obj.success(req.responseText);
				} else {
					obj.fail && obj.fail(req.status);
				}
			}
		}
	}
}

