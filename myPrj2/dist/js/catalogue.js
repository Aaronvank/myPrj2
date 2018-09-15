require(["config"],function(){
	require(["jquery","header","list_block","footer","cookie"],function($,header,list_block,footer,cookie){
		header.init();
		list_block.cool();
		footer.show();
		//渲染页面
		$(function(){
			var cool=$.cookie('id');
			$("#cool a").html(cool+"&nbsp;&nbsp;欢迎您☺");	
			var str = "";
			$.get(
				"http://localhost/gulpproject/api/v1/catalogue.php",
				function(data){
					 console.log(data.data)
					 data = data.data;
					 for(var i=0;i<data.length;i++){
						 str+=`<dl id="${data[i].id}">
							<a href="javascript:;">
								<dt><img src="${data[i].src}" ></dt>
								<dd><p class="ff">${data[i].colorNum}&nbsp;色</p>
									<p class="ff">${data[i].name}</p>
									<p class="ww">${data[i].type}</p>
									<p class="ww">&nbsp;￥${data[i].price}</p>
								</dd>
							</a>
						 </dl>`;
					 }
					 $(".list_box").html(str);
					 var len = $("dl").size();
					 for (let i =0 ;i<len;i++){
					 	$("dl").eq(i).on("click",function(){
					 		$.cookie('imgid',$(this).attr("id"),{
					 			path:"/"
					 		});
					 		window.location.href="/html/detail.html"
					 	})
					 }
				},"json"
			)
		})
	})
})