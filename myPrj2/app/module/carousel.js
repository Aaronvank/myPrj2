define(function (){
	function Carousel() {
		this.init();
	}
	Carousel.prototype = {
		constructor:Carousel,
		init:function(){
			this.box = $("#slideShow"),
			this.ul = $("#slideShow ul"),
			this.aLi = $('#slideShow ul li'),
			this.ol = $("#slideShow ol"),
			this.goPrev = $("#goPrev"),
		 	this.goNext = $("#goNext"),
		 	this.aBtn = $("#slideShow ol li"),//淡入淡出輪播圖按鈕
		 	this.idx = 0,//存当前处于第几张图
		 	this.btnIndex = 0,//按钮的下标
			this.flag = false;//没有播放
			this.len = this.aLi.length;//图片的张数
			this.liWidth = this.aLi.eq(0).outerWidth();
			this.timer = null;
		},
		lunbo:function(){
			var _this = this;//留住this
			//ul末尾拼接一个aLi[0],计算ul的宽度
			_this.ul.append(_this.aLi.eq(0).clone(true)).css("width",(_this.len+1)*_this.liWidth);
			//动态生成按钮
			for(var i = 0; i < _this.len; i++){
				$("<li class='"+ (i==0?"ac":"") +"'><b><b></li>").appendTo(_this.ol);
				
			}
			//按钮点击
			
			$("#slideShow ol li").on("click",function(){
				if(!_this.flag){
					_this.flag = true;
					$(this).addClass("ac").siblings().removeClass("ac");
					_this.ul.animate({"left":-$(this).index()*_this.liWidth},1000,function(){
						_this.flag = false;
					});
					_this.idx = $(this).index();
				}
			})
			
			_this.goPrev.on("click",function(){
				if(!_this.flag){
					_this.flag = true;
					_this.idx--;
					if(_this.idx < 0){
						//瞬间拉回补充那张图
						_this.ul.css("left",-_this.len*_this.liWidth);
						//从补充那张图往最后一张图播放的index
						_this.idx = _this.len - 1;
					}
					$("#slideShow ol li").eq(_this.idx).addClass("ac").siblings().removeClass("ac");
					_this.ul.animate({"left":-_this.idx*_this.liWidth},1000,function(){
						_this.flag = false;
					})
				}
			})
	
			_this.goNext.on("click",function(){
				if(!_this.flag){
					_this.flag = true;
					_this.idx++;
					if(_this.idx >= _this.len){
						$("#slideShow ol li").eq(0).addClass("ac").siblings().removeClass("ac");
						_this.ul.animate({"left":-_this.len*_this.liWidth},1000,function(){
							//瞬间拉回第0张
							_this.ul.css("left",0);
							_this.idx = 0;
							_this.flag = false;
						})
					}else{
						$("#slideShow ol li").eq(_this.idx).addClass("ac").siblings().removeClass("ac");
						_this.ul.animate({"left":-_this.idx*_this.liWidth},1000,function(){
							_this.flag = false;
						})
					}
				}
			})


			function auto(){
				_this.timer = setInterval(function(){
					_this.goNext.trigger("click");
				},2500);
			}
			auto();
			
			$("#slideShow").hover(function(){
				clearInterval(_this.timer);
				_this.goPrev.css("display","block");
				_this.goNext.css("display","block");
			},function(){
				auto();
				_this.goPrev.css("display","none");
				_this.goNext.css("display","none");
			});
		}
	}
	// var diaoyong = new Carousel();
	// diaoyong.lunbo1();
	// // diaoyong.lunbo2();
	return new Carousel();
})

