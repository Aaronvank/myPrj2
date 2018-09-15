define(function(){
	function Header(){}
	Header.prototype.init = function(){
		$("#header").load("/html/component/header.html",function(){})
	}
	return new Header();
})