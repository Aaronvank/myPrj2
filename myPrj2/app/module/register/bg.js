define(function(){
	function Bg(){}
	Bg.prototype.bgshow = function(){
		$(".girl").click(function(){
			$(this).css({"background":"black","color":"white"});
		})
		$(".boy").click(function(){
			$(this).css({"background":"black","color":"white"});
		})
	}
	return new Bg();
})