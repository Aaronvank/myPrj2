
require(['config'],function(){
	require(["jquery","ewm_block","cookie","md5"],function($,ewm_block,cookie){
		ewm_block.block();
		$(function(){
			$("#btn").click(function(){
				var account = document.getElementById("log_pwd").value;
				$.ajax({
					type:"POST",
					url:"http://localhost/gulpproject/api/v1/login.php",
					data:{"mail":$("#log_mail").val()},
					dataType:"json",
					success:function(data){
						data = data.dt;
						if(data == ""){
							$(".hint").css({
								"display":"block"
							})
						}else if(data[0].password == hex_md5(account)){
							$(location).attr('href', 'http://localhost:2333/');
							$.cookie('id',data[0].name,{
								path:"/"
							});
						}else{
							$(".hint").css({
								"display":"block"
							})
						}
					},
					error:function(){
							console.log("error")
					}
				})
			})
			
		})
	})
})
