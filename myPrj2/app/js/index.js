//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","carousel","ceiling","list_block","cookie"],function($,carousel,ceiling,list_block,cookie){
		carousel.lunbo();
		ceiling.fix();
		list_block.cool();
		$(function(){
			// 修改成本人id
			var cool=$.cookie('id');
			$("#cool").html(cool+"&nbsp;&nbsp;欢迎您☺");	
// 			
			//尾部效果
// 			$("#more").on("click",function(){
// 				$(this).css("display","none").parent().animate({
// 					"bottom":10,
// 					
// 				},"linear")
// 			}).on("mouseleave",function(){
// 				$(this).css("display","block").parent().animate({
// 					"border":"1SolidRed",
// 					"bottom":-10,
// 					
// 				},"linear")
// 			});
		})
	})
})