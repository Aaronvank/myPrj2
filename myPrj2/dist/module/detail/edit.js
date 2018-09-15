$.extend({
	myAlert:function(txt){
		//调用遮罩层，同时接收这个对象
		var $modal = $.modalLayer();
		$div = $('<div class="popBox"><h4>提示</h4><span class="closeBtn">X</span><p class="popCont">'+ txt +'</p><p class="btnBar"><button>确定</button></p></div>');
		/*$(document.body).append($div);
		$div.showCenter({top:-100,left:0});
		$div.drag();*/
		
		$div.appendTo($(document.body)).showCenter().drag();
		
		
		//事件委托给X和确定按钮写点击
		$div.on("click",".closeBtn,.btnBar button",function(){
			//删除
			$div.remove();
			$modal.remove();
		})
	},
	modalLayer:function(){
		//遮罩层
		$div = $("<div>");
		$div.css({
			"position":"fixed",
			"left":0,
			"top":0,
			"background":"rgba(0,0,0,.1)",
			"width":"100%",
			"height":"100%",
			"zIndex":70
		}).appendTo($(document.body));
		return $div;
	}
});

$.fn.extend({
	showCenter:function(obj){
		var _this = this;
		//窗口大小发生变化的时候继续居中
		$(window).on("resize",center);
		function center(){
			var left = ($(window).innerWidth() - $(_this).outerWidth())/2 + (obj ? obj.left : 0);
			var top  =($(window).innerHeight() - $(_this).outerHeight())/2 + (obj ? obj.top: 0);
			$(_this).css({
				left:left,
				top:top
			});
		};
		center();
		return $(this);
	},
	drag:function(){
		//$(this)
		console.log($(this));
	}
})