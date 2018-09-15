define(function(){
	function Cool(){}
	Cool.prototype.cool = function(){
		$(".outer .header_bottom .list").children().on("mouseenter",function(){
			$(".detail").css({
				"display":"block"
			})
		});
		$(".detail").on("mouseleave",function(){
			$(".detail").css({
				"display":"none"
			})
		})
	}
	return new Cool();
})