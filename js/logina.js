function okk() {
			//拿到输入框的值
	       var f1=username.value;
		   var f2=password.value;
		   //正则
		   var rexName=/^[a-zA-Z]{3,6}$/;
		   var rexPwd=/^\w{6,10}$/;
		   //正则匹配
		   var b1=rexName.test(f1)
		   var b2=rexPwd.test(f2)
	       
		   if(b1&&b2){
			   location.href="index.html"
		   }else{
			   if(username.value==""||password.value==""){
				   alert("信息不能为空")
				   return false;
			   }
			   alert("输入错误")
			   return false;
		   }
			}
function 	okxk() {
						   alert("注册成功")
						   location.href="login.html"
						   return false;
}
function funmsse(){
	alert("正在进入")
			   location.href="admin.html"
}
function okkm() {
			//拿到输入框的值
	       var f1=username.value;
		   var f2=password.value;
		   //正则
		   var rexName=/^[a-zA-Z]{3,6}$/;
		   var rexPwd=/^\w{6,10}$/;
		   //正则匹配
		   var b1=rexName.test(f1)
		   var b2=rexPwd.test(f2)
	       
		   if(b1&&b2){
			   location.href="adminx.html"
		   }else{
			   if(username.value==""||password.value==""){
				   alert("信息不能为空")
				   return false;
			   }
			   alert("输入错误")
			   return false;
		   }
			}
			function funmssexx(){
				alert("提交成功")
						   location.href="adminx.html"
			}