define(function(){
	function Block(){}
	Block.prototype.block = function(){
		$(".ewm").on("mouseenter",function(){
			$(".login_style").css({
				"display":"none"
			})
			$(".login_ewm").css({
				"display":"block"
			})
		});
		$(".login_ewm").hover(function(){
			$(".login_ewm").css({
				"display":"block"
			})
		},function(){
			$(".login_ewm").css({
				"display":"none"
			});
			$(".login_style").css({
				"display":"block"
			})
		})
		$(".normal").on("mouseenter",function(){
			$(".login_style").css({
				"display":"block"
			})
			$(".login_ewm").css({
				"display":"none"
			})
		})
	}
	return new Block();
})