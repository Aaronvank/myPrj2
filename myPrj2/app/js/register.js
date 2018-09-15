require(['config'],function(){
	require(["jquery","bg","url","md5"],function($,bg,url){
		bg.bgshow();
		
		$(function(){
			var name = document.getElementById("name");
			var register_pwd = document.getElementById("register_pwd");
			var confirm_pwd = document.getElementById("confirm_pwd");
			var register_email = document.getElementById("register_email");
			var sub = document.getElementById("sub");
			var arr = [false,false,false,false];
			// var obj = {};
			name.onblur = function(){
			var str = this.value;
			var reg = /^[a-z,0-9_]+$/i;
			if(reg.test(str)){
				arr[0] = true;
				this.parentNode.children[1].style.display = "none";
				this.parentNode.children[2].style.display = "block";
				// obj.name = str;
				}else{
					arr[0] = false;
					this.parentNode.children[1].style.display = "block";
					this.parentNode.children[2].style.display = "none";
					}
			}
			register_pwd.onblur = function(){
			var str = this.value;
			var reg = /.+/;
			if(reg.test(str)){
				arr[1] = true;
				this.parentNode.children[1].style.display = "none";
				this.parentNode.children[2].style.display = "block";
				}else{
					arr[1] = false;
					this.parentNode.children[1].style.display = "block";
					this.parentNode.children[2].style.display = "none";
					}
			}
		confirm_pwd.onblur = function(){
			var str = this.value;
			if(str == register_pwd.value){
				arr[2] = true;
				this.parentNode.children[1].style.display = "none";
				this.parentNode.children[2].style.display = "block";
				// obj.register_pwd = hex_md5("str");
				}else{
					arr[2] = false;
					this.parentNode.children[1].style.display = "block";
					this.parentNode.children[2].style.display = "none";
					}
			}
			register_email.onblur = function(){
			var str = this.value;
			var reg = /^\w+@[a-z0-9]+\.[a-z]+$/i;
			if(reg.test(str)){
				arr[3] = true;
				this.parentNode.children[1].style.display = "none";
				this.parentNode.children[2].style.display = "block";
				// obj.register_email = str;
				}else{
					arr[3] = false;
					this.parentNode.children[1].style.display = "block";
					this.parentNode.children[2].style.display = "none";
					}
			}
			// console.log(arr);

			sub.onsubmit = function(e){
				e = e || window.event;
				var isOk = arr.every(function(item){
					return item == true;
				});
				e.preventDefault();
				if(isOk){
						$.ajax({
							type:"POST",
							url:"http://localhost/gulpproject/api/v1/register.php",
							data:{
								"name":$("#name").val(),"register_pwd":hex_md5($("#register_pwd").val()),"register_email":$("#register_email").val()
							},
							success:function(data){
								$(location).attr('href', 'http://localhost:2333/html/login.html');
							},
							error:function(){
								alert("请求失败");
							}
						})
// 						$.post('http://localhost/gulpproject/api/v1/register.php',{"name":$("#name").val(),"register_pwd":hex_mad5($("#register_pwd").val()),"register_mail":$("#register_mail").val()},function(data){
// 							if(data.code){			
// 									$(location).attr('href', 'http://localhost:2333/html/login.html');
// 							}
// 						}function(){
// 							alert("请求失败")
// 						},"json")
					}
			}
			
		})
	})
})
