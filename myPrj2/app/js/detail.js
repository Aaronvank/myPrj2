require(['config'],function(){
	require(["jquery","header","footer","list_block","cookie"],function($,header,footer,list_block,cookie){
		header.init();
		footer.show();
		list_block.cool();
		
		$(function(){
			//渲染页面
			var imgid=$.cookie('imgid');
			$.get(
				"http://localhost/gulpproject/api/v1/detail.php",
				{"imgid":imgid},
				function(data){
					data = data[0];
					var str1 ="";
					str1+=`
						<p><img src="${data.src1}" class="pic" ></p>
						<p><img src="${data.src2}" ></p>
						<p><img src="${data.src3}" ></p>
						<p><img src="${data.src4}" ></p>
						<p><img src="${data.src5}" ></p>
						<p><img src="${data.src6}" ></p>
						`
					$(".d_pic").html(str1);
					var str2 ="";
					str2+=`
						<p class="type">${data.type}<span class="price">${data.price}</span></p>
						<p class="name">${data.name}</p>
						<p> <img src="${data.cla1}" >
							<img src="${data.cla2}" >
							<img src="${data.cla3}" >
						</p>
					`
					$("#more_infor").html(str2);
					var str3 ="";
					str3+=`
							<i>${data.intro}</i>
							<ul>
								<li class="color">显示颜色： ${data.color}</li>
								<li class="sku">款式： ${data.sku}</li>
							</ul>
							<p><a href="javascript:;">了解更多</a></p>
						`
						$(".intro_txt").html(str3);
				},
				"json")
			
			//下拉内容显示
			$(".ss").click(function(){
				$(".f_dt").toggleClass("db").animate({
					
				});
			})
			//尺码表选择
			$(".tab").children().each(function(i){
				var _this = $(this);
				_this.off("click").on("click",function(){
					$(this).css({
						"background":"black",
						"color":"white"
					}).siblings().css({
					"background":"white",
					"color":"black"
					});	
				})
			})
			$("#btn").on("click",function(){
				$(this).css("opacity",".6");
				var name = $(".name").text();
				var src = $(".src").attr("src");
				var type = $(".type").text();
				var color = $(".color").text();
				var sku = $("sku").text();
				var num = 1;
				var size = 42;
				var arr=[];
				var obj={
					name:name,
					src:src,
					type:type,
					color:color,
					sku:sku,
					num:num,
					size:size
				}
				arr.push(obj);
				var str=JSON.stringify(arr);
				$.cookie('car',src,{path:'/'});
				window.location.href="/html/cart.html"
			})
			
		})
	})
})