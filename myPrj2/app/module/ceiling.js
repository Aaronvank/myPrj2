define(function(){
	function Fix(){}
	Fix.prototype.fix = function(){
		var a = $('#header'),
		b =a.offset().top;//返回或设置导航栏相对于文档的偏移(位置)
		//加个屏幕滚动事件，c是滚动条相当于文档最顶端的距离
		$(document).on('scroll',function(){
		var c = $(document).scrollTop();
		if(b<=c){
			a.css({'position':'fixed','top':'0px'})
			}
     });
	}
	return new Fix();
})